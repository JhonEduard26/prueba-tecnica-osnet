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
    return products;
  } catch (error) {
    console.error(error);
  }
};

export const getProductById = async (id: number) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await response.json();

    if (!response.ok) {
      throw new Error(product.message);
    }

    return product;
  } catch (error) {
    console.error(error);
  }
};
