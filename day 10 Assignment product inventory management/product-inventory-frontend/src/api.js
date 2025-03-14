import axios from 'axios';

// Update this to match your backend port
const API_URL = "http://localhost:5041/api/products";

export const getProducts = () => axios.get(API_URL);

export const addProduct = async (product) => {
    return await axios.post(API_URL, product);
};

export const updateProduct = async (id, product) => {
    return await axios.put(`${API_URL}/${id}`, product);
};

// ✅ Keep only ONE deleteProduct function
export const deleteProduct = async (id) => {
    return await axios.delete(`${API_URL}/${id}`);
};