import { useState, useEffect, useMemo } from 'react';
import TopBarAdmin from '../../components/TopBarAdmin/TopBarAdmin.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import styles from '../../styles/Homeadmin.module.css';
import ResumenGrafico from '../../components/GraficoResumen/GraficoResumen.jsx';
import FormDate from '../../components/FormDate/FormDate.jsx';
import { useDashboardStats } from '../../hooks/useDashboardStats.jsx';


export const HomeAdmin = () => {
  const [diaAnalizado, setDiaAnalizado] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');

  const { stats, loading, error } = useDashboardStats(fechaInicio, fechaFin);
  
  // Esta función devuelve la fecha en formato YYYY-MM-DD
  const getTodayDateString = () => new Date().toISOString().split('T')[0];

  if (loading) return <div>Cargando estadísticas...</div>;
  if (error) return <div>Error al cargar estadísticas: {error.message}</div>;
  if (!stats) return <div>No hay estadísticas disponibles</div>;

  return (
    <>
      <div className={styles['home-background']}></div>
      <div className={styles['home-content']}>
        <TopBarAdmin/>

        <main className={styles['main-content']}>
          <h1>Resumen del día {diaAnalizado || getTodayDateString()}</h1>
          <FormDate
            fechaInicio={fechaInicio}
            fechaFin={fechaFin}
            onFechaInicioChange={setFechaInicio}
            onFechaFinChange={setFechaFin}
            onAnalizar={()=> setDiaAnalizado(fechaInicio)}
          />

          <div className={styles['resumen']}>
            <ResumenGrafico
              chartData={[
                { name: 'Órdenes', Actual: statsActual.totalOrders, Analizado: statsAnalizado.totalOrders },
                { name: 'Nuevos Usuarios', Actual: statsActual.newUsers, Analizado: statsAnalizado.newUsers },
                { name: 'Ingresos', Actual: statsActual.totalRevenue, Analizado: statsAnalizado.totalRevenue },
              ]}
              diaActual={getTodayDateString()}
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
