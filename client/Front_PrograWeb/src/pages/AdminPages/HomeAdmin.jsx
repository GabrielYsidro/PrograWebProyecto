import { useState, useEffect, useMemo } from 'react';
import { mockData } from '../../constants/Consts.jsx';
import TopBarAdmin from '../../components/TopBarAdmin/TopBarAdmin.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import styles from '../../styles/Homeadmin.module.css';
import ResumenGrafico from '../../components/GraficoResumen/GraficoResumen.jsx';
import FormDate from '../../components/FormDate/FormDate.jsx';

// Esta función devuelve la fecha en formato YYYY-MM-DD (como en mockData)
const getTodayDateString = () => new Date().toISOString().split('T')[0];

export const HomeAdmin = () => {
  const [diaAnalizado, setDiaAnalizado] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const diaActual = getTodayDateString();

  const dailyStats = useMemo(() => (
    mockData.reduce((acc, order) => {
      const date = order.date;
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
    }, [])
  ), [mockData]);

  const handleAnalizarFechas= () => {
    if (!fechaInicio || !fechaFin) {
      alert('Por favor seleccionar correctamente las fechas');
      return;
    }
    setDiaAnalizado(fechaInicio); // elige el primer día
  };
  useEffect(() => {
    document.body.setAttribute('data-dia-analizado', diaAnalizado || diaActual);
  }, [diaAnalizado, diaActual]);

  const getStatsForDate = (date) =>
    dailyStats.find(d => d.date === date) || { totalOrders: 0, newUsers: 0, totalRevenue: 0 };

  const statsActual = getStatsForDate(diaActual);
  const statsAnalizado = getStatsForDate(diaAnalizado);

  const chartData = [
    { name: 'Órdenes', Actual: statsActual.totalOrders, Analizado: statsAnalizado.totalOrders },
    { name: 'Nuevos Usuarios', Actual: statsActual.newUsers, Analizado: statsAnalizado.newUsers },
    { name: 'Ingresos', Actual: statsActual.totalRevenue, Analizado: statsAnalizado.totalRevenue },
  ];

  return (
    <>
      <div className={styles['home-background']}></div>
      <div className={styles['home-content']}>
        <TopBarAdmin/>

        <main className={styles['main-content']}>
          <h1>Resumen del día {diaAnalizado || diaActual}</h1>
          <FormDate
            fechaInicio={fechaInicio}
            fechaFin={fechaFin}
            onFechaInicioChange={setFechaInicio}
            onFechaFinChange={setFechaFin}
            onAnalizar={handleAnalizarFechas}
          />

          <div className={styles['resumen']}>
            <ResumenGrafico
              chartData={chartData}
              diaActual={diaActual}
              diaAnalizado={diaAnalizado}
            />
          </div>
        </main>
        <Footer className={styles.Footer} />
      </div>
    </>
  );
};

export default HomeAdmin;
