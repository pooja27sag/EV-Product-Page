
import axiosInstance from "../utils/axiosInstance";

const api = axiosInstance();
export const getProducts = async (id) => {
    try {
        const response = await api.get("/ev/getProducts");
        return response.data;
    } catch (error) {
        console.error("Failed to fetch product:", error);
        throw error;
    }
};
export const getProductById = async (id) => {
    try {
        const response = await api.get(`/ev/getSingleProduct/${id}`);
        return response.data;
    } catch (error) {
        console.error("Failed to fetch product:", error);
        throw error;
    }
};
