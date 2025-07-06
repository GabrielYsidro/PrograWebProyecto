const api = import.meta.env.VITE_API_URL;

export const fetchWishlistByUserId = async (userId) => {
  const res = await fetch(`${api}/wishlist/${userId}`);

  if (!res.ok) {
    throw new Error('Error al cargar la wishlist');
  }

  return res.json(); // devuelve el array de pokemones
};