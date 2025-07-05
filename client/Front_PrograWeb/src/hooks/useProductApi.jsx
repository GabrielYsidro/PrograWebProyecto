import { useState, useEffect } from 'react';
import { fetchProductos, createProducto, updateProducto, toggleActivoProducto } from '../services/productService';

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
    const productoNormalizado = {
      ...pokemon,
      nombre: pokemon.nombre || pokemon.name
    };
    setProductos(prev =>
      prev.map(p => p.id === id ? productoNormalizado : p)
    );
  };


  return { productos, agregarProducto, actualizarProducto, toggleActivo, loading, error };
}