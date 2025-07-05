import { createContext, useContext, useState, useEffect } from 'react';
import { 
  fetchProductos, 
  createProducto, 
  updateProducto, 
  fetchProductoById, 
  toggleActivoProducto 
} from '../services/productService.js';

const ProductosContext = createContext();

export const useProductos = () => useContext(ProductosContext);

export function ProductosProvider({ children }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProductosData = async () => {
    try {
      setLoading(true);
      setError(null);
      const pokemonArray = await fetchProductos();
      setProductos(pokemonArray);
    } catch (err) {
      setError(err.message);
      setProductos([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductosData();
  }, []);

  const agregarProducto = async (data) => {
    try {
      const result = await createProducto(data);
      setProductos(prev => [...prev, result.pokemon]);
      return result.pokemon;
    } catch (err) {
      throw err;
    }
  };

  const updateProduct = async (id, datosActualizados) => {
    try {
      const result = await updateProducto(id, datosActualizados);
      setProductos(prev => 
        prev.map(p => p.id === id ? result.pokemon : p)
      );
      return result.pokemon;
    } catch (err) {
      throw err;
    }
  };

  const getProductoById = async (id) => {
    try {
      const producto = await fetchProductoById(id);
      return producto;
    } catch (err) {
      return productos.find(p => p.id === parseInt(id) && p.activo === true);
    }
  };

  const toggleActivo = async (id) => {
    try {
      const result = await toggleActivoProducto(id);
      setProductos(prev => 
        prev.map(p => p.id === id ? { ...p, activo: !p.activo } : p)
      );
      return result;
    } catch (err) {
      throw err;
    }
  };

  const buscarProductos = async (termino, filtros = {}) => {
    try {
      if (!termino || termino.trim() === '') return [];
      
      const terminoLower = termino.toLowerCase();
      const resultados = productos.filter(p => 
        p.activo === true && (
          p.nombre.toLowerCase().includes(terminoLower) ||
          p.region.toLowerCase().includes(terminoLower) ||
          p.categoria.toLowerCase().includes(terminoLower) ||
          p.descripcion.toLowerCase().includes(terminoLower)
        )
      );

      let filtrados = resultados;
      if (filtros.categoria) {
        filtrados = filtrados.filter(p => p.categoria === filtros.categoria);
      }
      if (filtros.region) {
        filtrados = filtrados.filter(p => p.region === filtros.region);
      }
      if (filtros.precioMin) {
        filtrados = filtrados.filter(p => p.precio >= filtros.precioMin);
      }
      if (filtros.precioMax) {
        filtrados = filtrados.filter(p => p.precio <= filtros.precioMax);
      }

      return filtrados;
    } catch (err) {
      return [];
    }
  };

  const getProductosPorCategoria = (categoria) => {
    return productos.filter(p => p.activo === true && p.categoria === categoria);
  };

  const getProductosActivos = () => {
    return productos.filter(p => p.activo === true);
  };

  const getCategorias = () => {
    const categoriasUnicas = [...new Set(productos
      .filter(p => p.activo === true)
      .map(p => p.categoria)
    )];
    return categoriasUnicas;
  };

  const getRegiones = () => {
    const regionesUnicas = [...new Set(productos
      .filter(p => p.activo === true)
      .map(p => p.region)
    )];
    return regionesUnicas;
  };

  const value = {
    productos,
    loading,
    error,
    agregarProducto,
    updateProduct,
    getProductoById,
    toggleActivo,
    buscarProductos,
    getProductosPorCategoria,
    getProductosActivos,
    getCategorias,
    getRegiones,
    refetch: fetchProductosData,
  };

  return (
    <ProductosContext.Provider value={value}>
      {children}
    </ProductosContext.Provider>
  );
}