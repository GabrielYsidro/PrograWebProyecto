const api = import.meta.env.VITE_API_URL;

// Obtener todos los productos
export async function fetchProductos() {
  const res = await fetch(`${api}/pokes`);
  if (!res.ok) throw new Error('Error al obtener productos');
  const data = await res.json();
  return data.pokemons.map(p => ({
  ...p,
  nombre: p.nombre || p.name // usa 'nombre' si existe, si no usa 'name'
  }));
}

// Crear producto
export async function createProducto(data) {
  const res = await fetch(`${api}/pokes`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error('Error al crear producto');
  return res.json();
}

// Actualizar producto
export async function updateProducto(id, data) {
  const res = await fetch(`${api}/pokes/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error('Error al actualizar producto');
  return res.json();
}

//obtener producto por ID
export async function fetchProductoById(id) {
  const res = await fetch(`${api}/pokes/${id}`);
  if (!res.ok) throw new Error('Error al obtener producto');
  const data = await res.json();
  return data.pokemon;
}

//activar/desactivar producto
export async function toggleActivoProducto(id) {
  const res = await fetch(`${api}/pokes/${id}/activo`, {
    method: 'PUT'
  });
  if (!res.ok) throw new Error('Error al cambiar estado');
  return res.json();
}