const api = import.meta.env.VITE_API_URL;

// Obtener todos los productos
export async function fetchProductos() {
  const res = await fetch(`${api}/products`);
  if (!res.ok) throw new Error('Error al obtener productos');
  return res.json();
}

// Crear producto
export async function createProducto(data) {
  const res = await fetch(`${api}/products`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error('Error al crear producto');
  return res.json();
}

// Actualizar producto
export async function updateProducto(id, data) {
  const res = await fetch(`${api}/products/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error('Error al actualizar producto');
  return res.json();
}