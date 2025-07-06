const api = import.meta.env.VITE_API_URL;


export const fetchWishlistByUserId = async (userId) => {
  const res = await fetch(`${api}/wishlist/${userId}`);

  if (!res.ok) {
    throw new Error('Error al cargar la wishlist');
  }

  return res.json(); // devuelve el array de pokemones
};

export async function addToWishlistService(userId, pokemonId) {
  try {
    const res = await fetch(`${api}/wishlist`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({ userId, pokemonId })
    });
    
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error || 'Error al agregar a wishlist');
    }
    
    return res.json();
  } catch (error) {
    console.error('Error en addToWishlistService:', error);
    throw error;
  }
}

export async function removeFromWishlistService(userId, pokemonId) {
  try {
    const res = await fetch(`${api}/wishlist`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({ userId, pokemonId })
    });
    
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error || 'Error al eliminar de wishlist');
    }
    
    return res.json();
  } catch (error) {
    console.error('Error en removeFromWishlistService:', error);
    throw error;
  }
}

export async function isInWishlistService(userId, pokemonId) {
  try {
    const res = await fetch(`${api}/wishlist/${userId}/${pokemonId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    });
    
    if (!res.ok) return false;
    
    const data = await res.json();
    return data.isInWishlist;
  } catch (error) {
    console.error('Error en isInWishlistService:', error);
    return false;
  }
}