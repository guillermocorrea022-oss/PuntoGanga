'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import styles from './CartDrawer.module.css';
import Link from 'next/link';

export default function CartDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const { cart, removeFromCart, updateQuantity, cartSubTotal, cartDiscount, cartTotal, cartCount } = useCart();

    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.drawer} onClick={(e) => e.stopPropagation()}>
                <div className={styles.header}>
                    <h2>Tu Pedido ({cartCount})</h2>
                    <button onClick={onClose} className={styles.closeButton}>✕</button>
                </div>

                <div className={styles.content}>
                    {cart.length === 0 ? (
                        <div className={styles.empty}>
                            <p>Tu carrito está vacío</p>
                            <button onClick={onClose} className={styles.btnContinue}>Seguir comprando</button>
                        </div>
                    ) : (
                        <ul className={styles.itemList}>
                            {cart.map((item) => (
                                <li key={item.id} className={styles.item}>
                                    <img src={item.image} alt={item.name} className={styles.itemImage} />
                                    <div className={styles.itemDetails}>
                                        <h3>{item.name}</h3>
                                        <p className={styles.itemPrice}>${item.price.toLocaleString()}</p>
                                        <div className={styles.quantityControls}>
                                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                        </div>
                                    </div>
                                    <div className={styles.itemSubtotal}>
                                        <p>${(item.price * item.quantity).toLocaleString()}</p>
                                        <button onClick={() => removeFromCart(item.id)} className={styles.removeButton}>Eliminar</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {cart.length > 0 && (
                    <div className={styles.footer}>
                        {cartDiscount > 0 && (
                            <>
                                <div className={styles.subtotalRow}>
                                    <span>Subtotal:</span>
                                    <span>${cartSubTotal.toLocaleString()}</span>
                                </div>
                                <div className={styles.discountRow}>
                                    <span>Descuento (20%):</span>
                                    <span>-${cartDiscount.toLocaleString()}</span>
                                </div>
                            </>
                        )}
                        <div className={styles.totalRow}>
                            <span>Total General:</span>
                            <span className={styles.totalAmount}>${cartTotal.toLocaleString()}</span>
                        </div>
                        <p className={styles.disclaimer}>Envío a coordinar con la empresa.</p>
                        <Link
                            href="/checkout"
                            className={styles.checkoutButton}
                            onClick={onClose}
                        >
                            Finalizar Pedido
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
