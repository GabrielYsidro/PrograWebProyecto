const api = import.meta.env.VITE_API_URL;


export async function fetchDashboardStats({ fechaInicio, fechaFin }) {
  const params = new URLSearchParams();
  if (fechaInicio) params.append('fechaInicio', fechaInicio);
  if (fechaFin) params.append('fechaFin', fechaFin);

  const res = await fetch(`${api}/dashboard/stats?${params.toString()}`);
  if (!res.ok) throw new Error('Error al obtener estadísticas');
  return res.json();
}