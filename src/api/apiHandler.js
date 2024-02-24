import AxiosClient from "./apiClient";

export const getProduct = () => {
  return AxiosClient.get("/products");
};

export const getProductById = (id) => {
  return AxiosClient.get(`/products/${id}`);
};
