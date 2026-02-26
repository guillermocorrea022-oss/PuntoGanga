'use server';

import { Resend } from 'resend';

// NOTE: The USER will need to set RESEND_API_KEY in their environment variables.
// For now, we provide a placeholder to avoid breaking the build.
const resend = new Resend(process.env.RESEND_API_KEY || 're_123');

interface OrderData {
  customer: {
    nombre: string;
    apellido: string;
    telefono: string;
    direccion: string;
    pueblo: string;
    observaciones?: string;
  };
  items: any[];
  subTotal?: number;
  discount?: number;
  total: number;
}

export async function sendOrder(data: OrderData) {
  const { customer, items, subTotal, discount, total } = data;
  const date = new Date().toLocaleString('es-UY', { timeZone: 'America/Montevideo' });

  // If no API key is provided, we simulate success for demonstration
  if (!process.env.RESEND_API_KEY) {
    console.log('--- MOCK EMAIL SENT ---');
    console.log('To: Guillermo_correa112@hotmail.com, juliomcorrea@vera.com.uy');
    console.log('From: pedidos@puntoganga.com.uy');
    console.log('Subject: Nuevo Pedido Mayorista - ' + customer.nombre + ' ' + customer.apellido);
    console.log('Body:', {
      customer,
      items: items.length,
      total,
      date
    });

    // Artificial delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { success: true };
  }

  try {
    const htmlBody = `
      <div style="font-family: sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
        <h1 style="color: #5cb85c; border-bottom: 2px solid #5cb85c; padding-bottom: 10px;">Nuevo Pedido Mayorista</h1>
        <p><strong>Fecha:</strong> ${date}</p>
        
        <h2 style="background: #f8f9fa; padding: 10px;">Datos del Cliente</h2>
        <p><strong>Nombre:</strong> ${customer.nombre} ${customer.apellido}</p>
        <p><strong>Teléfono:</strong> ${customer.telefono}</p>
        <p><strong>Pueblo/Localidad:</strong> ${customer.pueblo}</p>
        <p><strong>Dirección:</strong> ${customer.direccion}</p>
        ${customer.observaciones ? `<p><strong>Observaciones:</strong> ${customer.observaciones}</p>` : ''}
        
        <h2 style="background: #f8f9fa; padding: 10px;">Detalle de Productos</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="border-bottom: 1px solid #ddd; text-align: left;">
              <th style="padding: 10px;">Producto</th>
              <th style="padding: 10px;">Cant.</th>
              <th style="padding: 10px;">Unit.</th>
              <th style="padding: 10px;">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            ${items.map(item => `
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 10px;">${item.name}</td>
                <td style="padding: 10px;">${item.quantity}</td>
                <td style="padding: 10px;">$${item.price.toLocaleString()}</td>
                <td style="padding: 10px; font-weight: bold;">$${(item.price * item.quantity).toLocaleString()}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
        
        <div style="margin-top: 20px; text-align: right; color: #555;">
          ${discount && discount > 0 ? `
            <div style="font-size: 1.1rem; margin-bottom: 5px;">Subtotal: $${subTotal?.toLocaleString()}</div>
            <div style="font-size: 1.1rem; margin-bottom: 10px; color: #d9534f; font-weight: bold;">Descuento (20%): -$${discount.toLocaleString()}</div>
          ` : ''}
          <div style="font-size: 1.5rem; font-weight: bold; color: #222;">
            Total Final: <span style="color: #5cb85c;">$${total.toLocaleString()}</span>
          </div>
        </div>
        
        <p style="margin-top: 30px; font-size: 0.8rem; color: #888; text-align: center; border-top: 1px solid #eee; padding-top: 10px;">
          Sistema de Pedidos Punto Ganga - Paysandú
        </p>
      </div>
    `;

    const response = await resend.emails.send({
      from: 'Pedidos Punto Ganga <onboarding@resend.dev>', // Should use a verified domain in production
      to: ['guillermo.correa022@gmail.com'], // Resend Free Tier restriction: can only send to verified account email
      subject: `🛍️ Pedido Mayorista: ${customer.pueblo} - ${customer.nombre} ${customer.apellido}`,
      html: htmlBody,
    });

    if (response.error) {
      return { success: false, message: response.error.message };
    }

    return { success: true };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
}
