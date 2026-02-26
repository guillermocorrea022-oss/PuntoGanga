'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import styles from './Header.module.css';
import CartDrawer from './CartDrawer';

export default function Header() {
    const { cartCount, cartTotal } = useCart();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <>
            <header className={styles.header}>
                <div className={`container ${styles.headerContent}`}>
                    <Link href="/" className={styles.logo}>
                        Punto <span>Ganga</span>
                    </Link>

                    <div className={styles.searchBar}>
                        <input type="text" placeholder="Buscar productos..." />
                        <button type="button">🔍</button>
                    </div>

                    <div className={styles.actions}>
                        <div className={styles.cartInfo}>
                            <span className={styles.cartTotal}>${cartTotal.toLocaleString()}</span>
                            <button
                                className={styles.cartButton}
                                aria-label="Ver carrito"
                                onClick={() => setIsDrawerOpen(true)}
                            >
                                🛒 <span className={styles.badge}>{cartCount}</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.topBanner}>
                    Electrodomésticos al mejor precio
                </div>
            </header>

            <CartDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
        </>
    );
}
