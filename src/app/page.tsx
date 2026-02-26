'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { products, categories, Category } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import styles from './page.module.css';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'Todos'>('Todos');
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('q')?.toLowerCase() || '';

  const filteredProducts = products.filter(p => {
    const matchesCategory = selectedCategory === 'Todos' || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery) ||
      p.description.toLowerCase().includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={styles.page}>
      {/* Hero Banner Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Punto Ganga Mayorista</h1>
          <p>Los mejores precios mayoristas para tu negocio</p>
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
          {searchQuery
            ? `Buscando: "${searchQuery}"`
            : (selectedCategory === 'Todos' ? 'Los mejores precios mayoristas' : `Nuevas ofertas en ${selectedCategory}`)}
        </h2>
        <div className={styles.grid}>
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {filteredProducts.length === 0 && (
          <div className={styles.noResults}>
            <p>No encontramos productos que coincidan con tu búsqueda.</p>
            <button onClick={() => window.location.href = '/'} className="btn-primary" style={{ marginTop: '1rem' }}>Ver todo el catálogo</button>
          </div>
        )}
      </section>
    </div>
  );
}
