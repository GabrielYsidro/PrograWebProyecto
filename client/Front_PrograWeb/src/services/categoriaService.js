const api = import.meta.env.VITE_API_URL;

export async function getCategorias() {
  const res = await fetch(`${api}/categories`);
  if (!res.ok) throw new Error('Error al obtener categorías en servicio');
  return res.json();
}

export async function postCategoria(categoria) {
  const res = await fetch(`${api}/categories`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(categoria),
  });
  if (!res.ok) throw new Error('Error al crear categoría en servicio');
  return res.json();
}

export async function deleteCategoria(id) {
  const res = await fetch(`${api}/categories/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Error al eliminar categoría en servicio');
  return res.json();
}
