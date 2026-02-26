'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import styles from './Header.module.css';
import CartDrawer from './CartDrawer';

export default function Header() {
    const { cartCount, cartTotal } = useCart();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();
    const [searchValue, setSearchValue] = useState(searchParams.get('q') || '');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchValue.trim()) {
            router.push(`/?q=${encodeURIComponent(searchValue.trim())}`);
        } else {
            router.push('/');
        }
    };

    return (
        <>
            <header className={styles.header}>
                <div className={`container ${styles.headerContent}`}>
                    <Link href="/" className={styles.logo} onClick={() => setSearchValue('')}>
                        Punto <span>Ganga</span>
                    </Link>

                    <form className={styles.searchBar} onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Buscar productos..."
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                        <button type="submit">🔍</button>
                    </form>

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
                    Los mejores precios mayoristas garantizados
                </div>
            </header>

            <CartDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
        </>
    );
}
