import { v4 as uuidv4 } from 'uuid'
import type { Product } from '../types';

export const getCategories = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products/categories");
    const categories = await response.json();
    return categories;
  } catch (error) {
    console.error(error);
  }
}

export const getProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();

    return products.map((product: Product) => ({
      ...product,
      id: uuidv4(),
    }))
  } catch (error) {
    console.error(error);
  }
};
