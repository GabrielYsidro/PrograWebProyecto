import { useState, useEffect } from 'react';
import { fetchProductos, createProducto, updateProducto } from '../services/productService';

export function useProductosApi() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProductos()
      .then(setProductos)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  const agregarProducto = async (data) => {
    const nuevo = await createProducto(data);
    setProductos(prev => [...prev, nuevo.pokemon]);
  };

  const actualizarProducto = async (id, data) => {
    const actualizado = await updateProducto(id, data);
    setProductos(prev => prev.map(p => p.id === id ? actualizado : p));
  };

  const toggleActivo = async (id) => {
    const { pokemon } = await toggleActivoProducto(id);
    setProductos(prev =>
      prev.map(p => p.id === id ? pokemon : p)
    );
  };


  return { productos, agregarProducto, actualizarProducto, toggleActivo, loading, error };
}