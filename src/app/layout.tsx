import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";
import { Suspense } from "react";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Punto Ganga - Catálogo Mayorista",
  description: "Venta por mayor de bazar, juguetes, herramientas y más en Paysandú.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <CartProvider>
          <Suspense fallback={<div style={{ height: '70px', background: '#fff' }}></div>}>
            <Header />
          </Suspense>
          <main className="container" style={{ paddingTop: '2rem', paddingBottom: '6rem' }}>
            {children}
          </main>
          <WhatsAppButton />
          <footer style={{ padding: '2rem', textAlign: 'center', backgroundColor: '#222', color: '#fff', marginTop: 'auto' }}>
            <p>&copy; {new Date().getFullYear()} Punto Ganga - Paysandú, Uruguay</p>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
