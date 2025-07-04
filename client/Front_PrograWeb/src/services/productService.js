const API_URL = 'http://localhost:3000/products';

// Obtener todos los productos
export async function fetchProductos() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error('Error al obtener productos');
  return res.json();
}

// Crear producto
export async function createProducto(data) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error('Error al crear producto');
  return res.json();
}

// Actualizar producto
export async function updateProducto(id, data) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error('Error al actualizar producto');
  return res.json();
}