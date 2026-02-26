'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { sendOrder } from '@/app/actions/sendOrder';
import styles from './Checkout.module.css';
import Link from 'next/link';

export default function CheckoutPage() {
    const { cart, cartSubTotal, cartDiscount, cartTotal, clearCart } = useCart();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');

    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        direccion: '',
        pueblo: '',
        observaciones: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (cart.length === 0) return;

        setIsSubmitting(true);
        setError('');

        try {
            const result = await sendOrder({
                customer: formData,
                items: cart,
                subTotal: cartSubTotal,
                discount: cartDiscount,
                total: cartTotal
            });

            if (result.success) {
                setIsSuccess(true);
                clearCart();
            } else {
                setError(result.message || 'Error al enviar el pedido. Intente nuevamente.');
            }
        } catch (err) {
            setError('Ocurrió un error inesperado. Por favor, intente más tarde.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className={styles.successContainer}>
                <div className={styles.successCard}>
                    <div className={styles.successIcon}>✓</div>
                    <h1>¡Pedido Enviado!</h1>
                    <p>Tu pedido ha sido registrado con éxito.</p>
                    <p className={styles.successRef}>Nos estaremos comunicando a la brevedad para coordinar el pago y envío.</p>
                    <Link href="/" className="btn-primary">Volver al catálogo</Link>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Finalizar Pedido</h1>

            <div className={styles.layout}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <section className={styles.section}>
                        <h2>Datos Personales</h2>
                        <div className={styles.formGrid}>
                            <div className={styles.field}>
                                <label htmlFor="nombre">Nombre *</label>
                                <input required type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} />
                            </div>
                            <div className={styles.field}>
                                <label htmlFor="apellido">Apellido *</label>
                                <input required type="text" id="apellido" name="apellido" value={formData.apellido} onChange={handleChange} />
                            </div>
                            <div className={styles.field}>
                                <label htmlFor="telefono">Teléfono *</label>
                                <input required type="tel" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} />
                            </div>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2>Entrega</h2>
                        <div className={styles.formGrid}>
                            <div className={styles.field}>
                                <label htmlFor="pueblo">Pueblo / Localidad *</label>
                                <input required type="text" id="pueblo" name="pueblo" value={formData.pueblo} onChange={handleChange} />
                            </div>
                            <div className={styles.field} style={{ gridColumn: 'span 2' }}>
                                <label htmlFor="direccion">Dirección Completa *</label>
                                <input required type="text" id="direccion" name="direccion" value={formData.direccion} onChange={handleChange} />
                            </div>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2>Observaciones (Opcional)</h2>
                        <div className={styles.field}>
                            <textarea name="observaciones" id="observaciones" rows={4} value={formData.observaciones} onChange={handleChange} placeholder="Horarios de entrega, aclaraciones, etc."></textarea>
                        </div>
                    </section>

                    {error && <p className={styles.errorMessage}>{error}</p>}

                    <button type="submit" className={styles.submitBtn} disabled={isSubmitting || cart.length === 0}>
                        {isSubmitting ? 'Enviando...' : 'Confirmar Pedido'}
                    </button>
                </form>

                <aside className={styles.summary}>
                    <div className={styles.summaryCard}>
                        <h3>Resumen del Pedido</h3>
                        <ul className={styles.summaryList}>
                            {cart.map(item => (
                                <li key={item.id}>
                                    <span>{item.quantity}x {item.name}</span>
                                    <span>${(item.price * item.quantity).toLocaleString()}</span>
                                </li>
                            ))}
                        </ul>
                        {cartDiscount > 0 && (
                            <div className={styles.summaryDiscountSection}>
                                <div className={styles.summarySubtotal}>
                                    <span>Subtotal:</span>
                                    <span>${cartSubTotal.toLocaleString()}</span>
                                </div>
                                <div className={styles.summaryDiscount}>
                                    <span>Descuento (20%):</span>
                                    <span>-${cartDiscount.toLocaleString()}</span>
                                </div>
                            </div>
                        )}
                        <div className={styles.summaryTotal}>
                            <span>Total a pagar:</span>
                            <span>${cartTotal.toLocaleString()}</span>
                        </div>
                        <p className={styles.summaryNote}>Al confirmar, se enviará un detalle completo a nuestro equipo.</p>
                    </div>
                </aside>
            </div>
        </div>
    );
}
