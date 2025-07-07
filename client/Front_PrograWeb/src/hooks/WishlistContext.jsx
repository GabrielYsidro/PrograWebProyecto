import { createContext, useContext, useState, useEffect } from 'react';
import { 
  fetchWishlistByUserId as fetchWishlist, 
  addToWishlistService, 
  removeFromWishlistService 
} from '../services/wishlistService.js';
import { useUserContext } from '../contexts/userContext.jsx';

const WishlistContext = createContext();

export const useWishlistContext = () => useContext(WishlistContext);

export function WishlistProvider({ children }) {
  // 🔧 AGREGAR PROTECCIÓN PARA useUserContext
  const userContext = useUserContext();
  
  // 🔧 Si userContext es undefined, mostrar error temporal
  if (!userContext) {
    console.error('WishlistProvider debe estar dentro de UserProvider');
    return children; // Renderizar children sin el contexto
  }
  
  const { currentUser } = userContext;
  const [wishlistItems, setWishlistItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (currentUser?.id) {
      fetchWishlistData();
    } else {
      setWishlistItems([]);
    }
  }, [currentUser]);

  const fetchWishlistData = async () => {
    if (!currentUser?.id) return;
    
    try {
      setLoading(true);
      setError(null);
      const wishlist = await fetchWishlist(currentUser.id);
      setWishlistItems(wishlist);
    } catch (err) {
      console.error('Error fetching wishlist:', err);
      setError(err.message);
      setWishlistItems([]);
    } finally {
      setLoading(false);
    }
  };

  const addToWishlist = async (producto) => {
    if (!currentUser?.id) {
      alert('Debes iniciar sesión para agregar a favoritos');
      return false;
    }

    try {
      await addToWishlistService(currentUser.id, producto.id);
      setWishlistItems(prev => {
        const exists = prev.find(item => item.id === producto.id);
        if (exists) return prev;
        return [...prev, producto];
      });
      return true;
    } catch (err) {
      console.error('Error adding to wishlist:', err);
      if (err.message.includes('ya está en la wishlist')) {
        alert('Este pokémon ya está en tus favoritos');
      } else {
        alert('Error al agregar a favoritos: ' + err.message);
      }
      return false;
    }
  };

  const removeFromWishlist = async (pokemonId) => {
    if (!currentUser?.id) return false;

    try {
      await removeFromWishlistService(currentUser.id, pokemonId);
      setWishlistItems(prev => prev.filter(item => item.id !== pokemonId));
      return true;
    } catch (err) {
      console.error('Error removing from wishlist:', err);
      alert('Error al eliminar de favoritos: ' + err.message);
      return false;
    }
  };

  const isInWishlist = (pokemonId) => {
    return wishlistItems.some(item => item.id === pokemonId);
  };

  const clearWishlist = () => {
    setWishlistItems([]);
  };

  const value = {
    wishlistItems,
    loading,
    error,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    clearWishlist,
    refetch: fetchWishlistData
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}