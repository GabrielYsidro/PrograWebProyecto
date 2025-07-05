import { useState, useEffect } from 'react';
import { fetchDashboardStats } from '../services/dashboardService';

export function useDashboardStats(fechaInicio, fechaFin) {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchDashboardStats({ fechaInicio, fechaFin })
      .then(setStats)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [fechaInicio, fechaFin]);

  return { stats, loading, error };
}