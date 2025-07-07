const api = import.meta.env.VITE_API_URL;

export async function getOrders() {
  const res = await fetch(`${api}/order`);
  if (!res.ok) throw new Error('Error al obtener órdenes del servicio');
  const data = await res.json();

  return data.ordenes; // 👈 retorna directamente el array
}

export async function cancelOrder(id) {
  const res = await fetch(`${api}/order/${id}/cancel`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) throw new Error('Error al cancelar la orden');

  const data = await res.json();
  return data.orden; 
}

export async function getOrdersByUser(userId) {
  const res = await fetch(`${api}/order/user/${userId}`);
  if (!res.ok) throw new Error('Error al obtener órdenes del usuario');
  const data = await res.json();
  return data.ordenes;
}

export async function getUserOrders(userId) {
  const res = await fetch(`${api}/order/UserOrders/${userId}`);
  if (!res.ok) throw new Error('Error al obtener órdenes del usuario');
  const data = await res.json();
  return data.ordenes;
}

