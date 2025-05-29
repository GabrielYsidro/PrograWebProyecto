import { useState } from 'react';
import { productos } from '../../constants/Consts.jsx';
import TopBarUser from '../../components/TopBarUser/TopBarUser.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import styles from '../../styles/Home.module.css';
import Producto from '../../components/Producto/Producto.jsx';
import { useUserContext } from '../../contexts/UserContext';

const HomeUser = () => {
  const [busqueda, setBusqueda] = useState('');
  const [busquedaActiva, setBusquedaActiva] = useState('');
  const { usuario } = useUserContext();

  const handleSearch = (e) => {
    e.preventDefault();
    setBusquedaActiva(busqueda.trim().toLowerCase());
  };

  const productosFiltrados = productos.filter(
    (p) => !busquedaActiva || p.nombre.toLowerCase().includes(busquedaActiva)
  );

  return (
    <>
      <div className={styles['home-background']}></div>
      <div className={styles['home-content']}>
        <TopBarUser handleSearch={handleSearch} busqueda={busqueda} setBusqueda={setBusqueda} />
        <main style={{ flex: 1, padding: '2rem' }}>
          <h2 className={styles.elige}>
            ¡Bienvenido, {usuario?.nombre || 'usuario'}!
          </h2>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '1.5rem', justifyContent: 'center' }}>
            {productosFiltrados.length === 0 ? (
              <span style={{ color: '#888', fontStyle: 'italic' }}>No hay productos encontrados.</span>
            ) : (
              productosFiltrados.map((producto) => (
                <Producto key={producto.id} producto={producto} />
              ))
            )}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HomeUser;
