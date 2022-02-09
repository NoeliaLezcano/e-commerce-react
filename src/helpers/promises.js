import { products, product } from "../data/products";

export const productsAPI = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject("Message Error from Reject");
    resolve(products);
  }, 2000);
});

export const productAPI = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject("Message Error from Reject");
    resolve(product);
  }, 2000);
});