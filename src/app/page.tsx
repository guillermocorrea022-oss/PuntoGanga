'use client';

import React, { useState } from 'react';
import { products, categories, Category } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import styles from './page.module.css';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'Todos'>('Todos');

  const filteredProducts = selectedCategory === 'Todos'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className={styles.page}>
      {/* Hero Banner Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Punto Ganga Mayorista</h1>
          <p>Los mejores precios para tu negocio en Paysandú</p>
          <div className={styles.heroBadges}>
            <span>🚚 Envíos gratis</span>
            <span>⚡ Pedidos rápidos</span>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <nav className={styles.categoryNav}>
        <button
          className={selectedCategory === 'Todos' ? styles.active : ''}
          onClick={() => setSelectedCategory('Todos')}
        >
          Todos
        </button>
        {categories.map(cat => (
          <button
            key={cat}
            className={selectedCategory === cat ? styles.active : ''}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </nav>

      {/* Product Grid */}
      <section className={styles.catalogSection}>
        <h2 className={styles.sectionTitle}>
          {selectedCategory === 'Todos' ? 'Nuestras Ofertas' : `Nuevas ofertas en ${selectedCategory}`}
        </h2>
        <div className={styles.grid}>
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {filteredProducts.length === 0 && (
          <p className={styles.noResults}>No hay productos disponibles en esta categoría por el momento.</p>
        )}
      </section>
    </div>
  );
}
