import { useState, useEffect } from 'react';
import { fetchProductoById } from '../services/productService';

export function useProductoDetalle(id) {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchProductoById(id)
      .then(setProducto)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [id]);

  return { producto, loading, error };
}