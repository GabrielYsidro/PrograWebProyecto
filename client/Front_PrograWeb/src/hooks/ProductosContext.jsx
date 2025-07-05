import { createContext, useContext, useState, useEffect } from 'react';

const ProductosContext = createContext();

export const useProductos = () => useContext(ProductosContext);

export function ProductosProvider({ children }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 🔥 Variable de entorno para la API
  const api = import.meta.env.VITE_API_URL;

  // 🔥 CASO DE USO: Listar Pokémones → GET productos (usando getPokes)
  const fetchProductos = async () => {
    try {
      setLoading(true);
      setError(null);
      
      console.log('🔄 Llamando a getPokes endpoint...');
      const response = await fetch(`${api}/pokes`);
      
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      console.log('📦 Datos recibidos de getPokes:', data);
      console.log('📦 Tipo de data:', typeof data);
      console.log('📦 Es array?:', Array.isArray(data));
      
      // Asegurarse de que sea un array
      let pokemonArray = [];
      if (data.pokemons && Array.isArray(data.pokemons)) {
        pokemonArray = data.pokemons;
      } else if (Array.isArray(data)) {
        pokemonArray = data;
      } else if (data.data && Array.isArray(data.data)) {
        pokemonArray = data.data;
      }
      
      console.log('🎯 Array final:', pokemonArray);
      console.log('🎯 Primer elemento:', pokemonArray[0]);
      console.log('🎯 Propiedades del primer elemento:', pokemonArray[0] ? Object.keys(pokemonArray[0]) : 'No hay elementos');
      
      setProductos(pokemonArray);
      
    } catch (err) {
      console.error('❌ Error fetching productos:', err);
      setError(err.message);
      setProductos([]); // Array vacío en caso de error
    } finally {
      setLoading(false);
    }
  };

  // Cargar productos al montar el componente
  useEffect(() => {
    fetchProductos();
  }, []);

  // 🔥 Función para agregar producto (conectar con createPoke)
  const agregarProducto = async (data) => {
    try {
      console.log('📤 Enviando nuevo producto:', data);
      const response = await fetch(`${api}/pokes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Error al crear producto');
      }

      const result = await response.json();
      console.log('✅ Producto creado:', result);
      
      // Actualizar lista local
      setProductos(prev => [...prev, result.pokemon]);
      alert('Producto agregado con éxito!');
      return result.pokemon;
    } catch (err) {
      console.error('❌ Error adding producto:', err);
      alert('Error al agregar producto: ' + err.message);
      throw err;
    }
  };

  // 🔥 Función para actualizar producto (conectar con updatePoke)
  const updateProduct = async (id, datosActualizados) => {
    try {
      console.log('🔄 Actualizando producto:', id, datosActualizados);
      const response = await fetch(`${api}/pokes/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosActualizados),
      });

      if (!response.ok) {
        throw new Error('Error al actualizar producto');
      }

      const result = await response.json();
      console.log('✅ Producto actualizado:', result);
      
      // Actualizar lista local
      setProductos(prev => 
        prev.map(p => p.id === id ? result.pokemon : p)
      );
      return result.pokemon;
    } catch (err) {
      console.error('❌ Error updating producto:', err);
      throw err;
    }
  };

  // 🔥 Función para buscar productos con parámetros
  const buscarProductos = async (termino, filtros = {}) => {
    try {
      const params = new URLSearchParams();
      if (termino) params.append('q', termino);
      if (filtros.categoria) params.append('categoria', filtros.categoria);
      if (filtros.region) params.append('region', filtros.region);
      
      console.log('🔍 Buscando con params:', params.toString());
      const response = await fetch(`${api}/pokes/search?${params.toString()}`);
      
      if (!response.ok) {
        throw new Error('Error en la búsqueda');
      }
      
      const data = await response.json();
      return data.pokemons || data || [];
    } catch (err) {
      console.error('❌ Error searching productos:', err);
      // Fallback a filtrado local
      if (!termino || termino.trim() === '') return [];
      
      const terminoLower = termino.toLowerCase();
      return productos.filter(p => 
        p.activo === true && (
          p.nombre.toLowerCase().includes(terminoLower) ||
          p.region.toLowerCase().includes(terminoLower) ||
          p.categoria.toLowerCase().includes(terminoLower)
        )
      );
    }
  };

  // 🔥 Funciones de filtrado local (sin endpoints adicionales)
  const getProductosPorCategoria = (categoria) => {
    return productos.filter(p => p.activo === true && p.categoria === categoria);
  };

  const getProductoById = async (id) => {
    try {
      console.log('🔍 Obteniendo producto por ID:', id);
      const response = await fetch(`${api}/pokes/${id}`);
      
      if (!response.ok) {
        throw new Error('Producto no encontrado');
      }
      
      const data = await response.json();
      return data.pokemon || data;
    } catch (err) {
      console.error('❌ Error getting producto by ID:', err);
      // Fallback a búsqueda local
      return productos.find(p => p.id === parseInt(id) && p.activo === true);
    }
  };

  const value = {
    productos,
    loading,
    error,
    agregarProducto,
    updateProduct,
    getProductosPorCategoria,
    buscarProductos,
    getProductoById,
    refetch: fetchProductos,
  };

  return (
    <ProductosContext.Provider value={value}>
      {children}
    </ProductosContext.Provider>
  );
}