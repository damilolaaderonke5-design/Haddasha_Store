import { useState, useEffect } from "react";
import api from "../services/api";

export default function useProducts() {
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

useEffect(() => {
let ignore = false;

async function fetchProducts() {
  try {
    setLoading(true);
    setError("");

    const response = await api.get("/products");

    if (!ignore) {
      setProducts(response.data);
    }
  } catch (err) {
    if (!ignore) {
      setError(
        "Unable to load products. Please check your connection and try again."
      );
    }
  } finally {
    if (!ignore) {
      setLoading(false);
    }
  }
}

fetchProducts();

return () => {
  ignore = true;
};

}, []);

return { products, loading,error,};
}






