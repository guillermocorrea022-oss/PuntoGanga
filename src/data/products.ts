export type Category = 'Bazar' | 'Juguetes' | 'Camping y Pesca' | 'Herramientas' | 'Muebles y Electrodomesticos';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
}

export const products: Product[] = [
  // Electrodomesticos
  {
    id: 'e1',
    name: 'Set de Mostacillas y Accesorios',
    description: 'Set completo de mostacillas para manualidades infantiles.',
    price: 9000,
    category: 'Bazar',
    image: 'https://placehold.co/400x400/5cb85c/white?text=Mostacillas' // Placeholder logic, will use better ones if needed
  },
  {
    id: 'e2',
    name: 'Juego Didáctico de Rana',
    description: 'Juego didáctico de equilibrio con figuras y balanza.',
    price: 9000,
    category: 'Juguetes',
    image: 'https://placehold.co/400x400/5cb85c/white?text=Juego+Rana'
  },
  {
    id: 'e3',
    name: 'Pizarra Infantil con Proyector',
    description: 'Pizarra infantil con proyector incorporado y mesa de dibujo.',
    price: 9000,
    category: 'Juguetes',
    image: 'https://placehold.co/400x400/5cb85c/white?text=Pizarra'
  },
  {
    id: 'e4',
    name: 'Lanzador de Discos con Guante',
    description: 'Lanzador de discos con ventosa y guante incluido.',
    price: 9000,
    category: 'Juguetes',
    image: 'https://placehold.co/400x400/5cb85c/white?text=Lanzador'
  },
  {
    id: 'e5',
    name: 'Robot Transformable Rojo',
    description: 'Robot de juguete transformable de auto a figura.',
    price: 9000,
    category: 'Juguetes',
    image: 'https://placehold.co/400x400/5cb85c/white?text=Robot'
  },
  // Add some more for each category to make it look full
  {
    id: 'h1',
    name: 'Taladro Percutor 500W',
    description: 'Taladro de alto rendimiento para uso profesional.',
    price: 3500,
    category: 'Herramientas',
    image: 'https://placehold.co/400x400/222/white?text=Taladro'
  },
  {
    id: 'c1',
    name: 'Carpa Camping 4 Personas',
    description: 'Carpa impermeable con ventilación superior.',
    price: 4500,
    category: 'Camping y Pesca',
    image: 'https://placehold.co/400x400/5cb85c/white?text=Carpa'
  },
  {
    id: 'm1',
    name: 'Ventilador de Pie 18"',
    description: 'Ventilador potente con 3 velocidades y oscilación.',
    price: 1800,
    category: 'Muebles y Electrodomesticos',
    image: 'https://placehold.co/400x400/f8f9fa/333?text=Ventilador'
  }
];

export const categories: Category[] = [
  'Bazar',
  'Juguetes',
  'Camping y Pesca',
  'Herramientas',
  'Muebles y Electrodomesticos'
];
