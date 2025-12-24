
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  stock: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  id: string;
  email: string;
  role: 'admin' | 'user';
}

export type Category = 'Electronics' | 'Clothing' | 'Home' | 'Accessories';
