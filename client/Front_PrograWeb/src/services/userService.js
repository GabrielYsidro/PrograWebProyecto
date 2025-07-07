const api = import.meta.env.VITE_API_URL;

export async function getUser() {
  const res = await fetch(`${api}/users`);
  if (!res.ok) throw new Error('Error al obtener users en servicio');
  return res.json();
}

export async function getUserId(id) {
  const res = await fetch(`${api}/users/${id}`);
  if (!res.ok) throw new Error('Error al obtener user por ID en servicio');
  return res.json();
}

export async function addUser(user) {
  console.log(user);
  const res = await fetch(`${api}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  if (!res.ok) throw new Error('Error al agregar user en servicio');
  return res.json();
}

export async function cambiarEstado(id, active) {
  const res = await fetch(`${api}/users/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ active }) // Solo envía el campo necesario
  });
  if (!res.ok) throw new Error('Error al actualizar user en servicio');
  return res.json();
}

export async function changePass(id, currentPassword, newPassword) {
  const res = await fetch(`${api}/users/changepassword/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ currentPassword, newPassword })
  });
  if (!res.ok) throw new Error('Error al cambiar contraseña en servicio');
  return res.json();
}

export async function recoverPassword(email, newPassword) {
  const res = await fetch(`${api}/users/recoverpassword`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, newPassword })
  });
  if (!res.ok) throw new Error('Error al recuperar contraseña en servicio');
  return res.json();
}