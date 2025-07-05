const api = import.meta.env.VITE_API_URL;

export async function getCategorias() {
  const res = await fetch(`${api}/categories`);
  if (!res.ok) throw new Error('Error al obtener categorías en servicio');
  return res.json();
}
