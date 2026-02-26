'use client';

import React, { useState } from 'react';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }: { product: Product }) {
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [isAdded, setIsAdded] = useState(false);

    const [isImageModalOpen, setIsImageModalOpen] = useState(false);

    const handleAdd = () => {
        if (quantity < 1) return;
        addToCart(product, quantity);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    return (
        <>
            <div className={styles.card}>
                <div className={styles.imageWrapper} onClick={() => setIsImageModalOpen(true)} style={{ cursor: 'pointer' }}>
                    <img src={product.image} alt={product.name} loading="lazy" />
                </div>
                <div className={styles.content}>
                    <h3 className={styles.title}>{product.name}</h3>
                    <p className={styles.category}>{product.category}</p>
                    <p className={styles.price}>${product.price.toLocaleString()}</p>
                    <p className={styles.description}>{product.description}</p>

                    <div className={styles.actions}>
                        <div className={styles.quantityPicker}>
                            <label htmlFor={`qty-${product.id}`}>Cant.</label>
                            <input
                                id={`qty-${product.id}`}
                                type="number"
                                min="1"
                                value={quantity}
                                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 0))}
                            />
                        </div>
                        <button
                            onClick={handleAdd}
                            className={`${styles.addButton} ${isAdded ? styles.added : ''}`}
                        >
                            {isAdded ? '✓ Agregado' : '🛒 Añadir'}
                        </button>
                    </div>
                </div>
            </div>

            {isImageModalOpen && (
                <div className={styles.modalOverlay} onClick={() => setIsImageModalOpen(false)}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.modalClose} onClick={() => setIsImageModalOpen(false)}>✕</button>
                        <img src={product.image} alt={product.name} className={styles.modalImage} />
                    </div>
                </div>
            )}
        </>
    );
}
