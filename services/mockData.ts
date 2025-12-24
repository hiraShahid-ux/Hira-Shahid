
import { Product } from '../types';

export const initialProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299.99,
    image: 'https://picsum.photos/seed/hp1/600/600',
    description: 'Experience immersive sound with active noise cancellation and 40-hour battery life.',
    category: 'Electronics',
    stock: 15
  },
  {
    id: '2',
    name: 'Minimalist Cotton T-Shirt',
    price: 35.00,
    image: 'https://picsum.photos/seed/ts1/600/600',
    description: 'Soft, breathable 100% organic cotton tee for everyday comfort.',
    category: 'Clothing',
    stock: 50
  },
  {
    id: '3',
    name: 'Smart Home Speaker',
    price: 129.00,
    image: 'https://picsum.photos/seed/spk1/600/600',
    description: 'Control your home with your voice. Crystal clear audio in a compact design.',
    category: 'Electronics',
    stock: 20
  },
  {
    id: '4',
    name: 'Leather Everyday Bag',
    price: 185.00,
    image: 'https://picsum.photos/seed/bag1/600/600',
    description: 'Handcrafted genuine leather bag perfect for work or travel.',
    category: 'Accessories',
    stock: 8
  },
  {
    id: '5',
    name: 'Ceramic Table Lamp',
    price: 79.99,
    image: 'https://picsum.photos/seed/lamp1/600/600',
    description: 'Elegant modern lighting with a textured ceramic base and linen shade.',
    category: 'Home',
    stock: 12
  },
  {
    id: '6',
    name: 'Mechanical Gaming Keyboard',
    price: 149.99,
    image: 'https://picsum.photos/seed/kb1/600/600',
    description: 'Tactile, responsive switches with RGB backlighting for peak performance.',
    category: 'Electronics',
    stock: 25
  }
];
