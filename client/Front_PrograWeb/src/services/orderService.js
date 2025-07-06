const api = import.meta.env.VITE_API_URL;

export async function getOrders() {
  const res = await fetch(`${api}/order`);
  if (!res.ok) throw new Error('Error al obtener categorías en servicio');
  return res.json();
}