import { useState, useEffect } from 'react';
import { mockData } from '../../constants/Consts.jsx';
import TopBarAdmin from '../../components/TopBarAdmin/TopBarAdmin.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import styles from '../../styles/Homeadmin.module.css';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from 'recharts';

// Esta función devuelve la fecha en formato YYYY-MM-DD (como en mockData)
const getTodayDateString = () => {
  const today = new Date();
  return today.toISOString().split('T')[0]; // "2025-05-23"
};

const dailyStats = mockData.reduce((acc, order) => {
  const date = order.date; // ya viene en "YYYY-MM-DD"
  let stat = acc.find(d => d.date === date);
  if (!stat) {
    stat = { date, totalOrders: 0, newUsers: 0, totalRevenue: 0 };
    acc.push(stat);
  }
  stat.totalOrders += 1;
  stat.totalRevenue += order.total || 0;
  if (order.isNewUser && order.registrationDate === order.date) {
    stat.newUsers += 1;
  }
  return acc;
}, []);

export const HomeAdmin = () => {
  const [busqueda, setBusqueda] = useState('');
  const [diaAnalizado, setDiaAnalizado] = useState('');
  const diaActual = getTodayDateString();

  useEffect(() => {
    document.body.setAttribute('data-dia-analizado', diaAnalizado || diaActual);
  }, [diaAnalizado, diaActual]);

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Buscando: ${busqueda}`);
  };

  const analizarFechas = () => {
    const diaA = document.getElementById('DiaA')?.value;
    const diaD = document.getElementById('DiaD')?.value;

    if (!diaA || !diaD) {
      alert('Por favor seleccionar correctamente las fechas');
      return;
    }

    // Solo vamos a analizar un día por simplicidad
    setDiaAnalizado(diaA); // elige el primer día
  };

  const getStatsForDate = (date) => {
    return dailyStats.find(d => d.date === date) || { totalOrders: 0, newUsers: 0, totalRevenue: 0 };
  };

  const statsActual = getStatsForDate(diaActual);
  const statsAnalizado = getStatsForDate(diaAnalizado);

  const chartData = [
    {
      name: 'Órdenes',
      Actual: statsActual.totalOrders,
      Analizado: statsAnalizado.totalOrders,
    },
    {
      name: 'Nuevos Usuarios',
      Actual: statsActual.newUsers,
      Analizado: statsAnalizado.newUsers,
    },
    {
      name: 'Ingresos',
      Actual: statsActual.totalRevenue,
      Analizado: statsAnalizado.totalRevenue,
    },
  ];

  return (
    <>
      <div className={styles['home-background']}></div>
      <div className={styles['home-content']}>
        <TopBarAdmin handleSearch={handleSearch} busqueda={busqueda} setBusqueda={setBusqueda} />

        <main className={styles['main-content']}>
          <h1>Resumen del día {diaAnalizado || diaActual}</h1>

          <form>
            <label htmlFor="DiaA">Fecha a analizar:</label>
            <input type="date" name="DiaA" id="DiaA" />
            <br /><br />
            <label htmlFor="DiaD">Fecha final (no usada aún):</label>
            <input type="date" name="DiaD" id="DiaD" />
            <br /><br />
            <button type="button" onClick={analizarFechas}>Analizar</button>
          </form>

          <div className={styles['resumen']}>
            <h3>Comparativo entre {diaActual} (Actual) y {diaAnalizado || diaActual} (Analizado)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Actual" fill="#8884d8" />
                <Bar dataKey="Analizado" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </main>

        <Footer className={styles.Footer} />
      </div>
    </>
  );
};

export default HomeAdmin;
