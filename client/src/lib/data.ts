export interface ProductPrice {
  quantity: string;
  price: number;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  prices: ProductPrice[];
  category: string;
}

export const initialProducts: Product[] = [
  {
    id: 1,
    name: "Groundnut Oil",
    description: "Pure, cold-pressed groundnut oil retaining natural aroma and nutrients. Perfect for deep frying and daily cooking.",
    image: "/images/groundnut-oil.png",
    category: "Cooking Oil",
    prices: [
      { quantity: "5kg", price: 880 },
      { quantity: "15kg", price: 2640 }
    ]
  },
  {
    id: 2,
    name: "Kusubi (Safflower) Oil",
    description: "Heart-healthy safflower oil rich in unsaturated fats. Known as 'Kusubi' locally, it's excellent for balancing cholesterol.",
    image: "/images/safflower-oil.png",
    category: "Cooking Oil",
    prices: [
      { quantity: "5kg", price: 1225 },
      { quantity: "15kg", price: 3675 }
    ]
  },
  {
    id: 3,
    name: "Coconut Oil",
    description: "100% pure coconut oil extracted from premium copras. Ideal for cooking, hair care, and skincare.",
    image: "/images/coconut-oil.png",
    category: "Cooking/Cosmetic",
    prices: [
      { quantity: "1kg", price: 500 }
    ]
  },
  {
    id: 4,
    name: "Cotton Seed Oil",
    description: "Refined cotton seed oil with a high smoke point. A cost-effective choice for frying and everyday dishes.",
    image: "/images/cotton-oil.png",
    category: "Cooking Oil",
    prices: [
      { quantity: "5kg", price: 750 },
      { quantity: "15kg", price: 2250 }
    ]
  },
  {
    id: 5,
    name: "Sunflower Oil",
    description: "Light and healthy sunflower oil. Fortified with vitamins and low in saturated fats for a healthy lifestyle.",
    image: "/images/sunflower-oil.png",
    category: "Cooking Oil",
    prices: [
      { quantity: "5kg", price: 900 },
      { quantity: "15kg", price: 2700 }
    ]
  }
];

// Simple in-memory store simulation
let products = [...initialProducts];

export const getProducts = () => products;
export const addProduct = (product: Product) => {
  products.push(product);
};
export const updateProduct = (id: number, updatedProduct: Partial<Product>) => {
  products = products.map(p => p.id === id ? { ...p, ...updatedProduct } : p);
};
export const deleteProduct = (id: number) => {
  products = products.filter(p => p.id !== id);
};
