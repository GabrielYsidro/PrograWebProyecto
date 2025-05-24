import { useState } from 'react';
import { Link } from 'react-router-dom';
import { productos } from '../../constants/Consts.jsx';
import TopBar from '../../components/TopBar/TopBar.jsx';
import Footer from '../../components/Footer/Footer.jsx'
import styles from '../../styles/Home.module.css';

export const Home = () => {
    const [busqueda, setBusqueda] = useState('');
    const [busquedaActiva, setBusquedaActiva] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        setBusquedaActiva(busqueda.trim().toLowerCase());
    };


    const tipos = ['Fuego', 'Agua', 'Planta'];
    const productosPorTipo = tipo => productos.filter(p => p.tipo === tipo && (!busquedaActiva || p.nombre.toLowerCase().includes(busquedaActiva)));
    const tipoStyles = {
    Fuego: { background: '#ffb3b3' },   // Rojo más intenso
    Agua: { background: '#b3d1ff' },    // Azul más intenso
    Planta: { background: '#b3ffb3' }   // Verde más intenso
    };
    const tipoBorderColors = {
    Fuego: '#ff5252',
    Agua: '#2979ff',
    Planta: '#43a047'
    };

    return (
    <>
        <div className={styles['home-background']}></div>
        <div className={styles['home-content']} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <TopBar handleSearch={handleSearch} busqueda={busqueda} setBusqueda={setBusqueda} />
            {/* Main Content */}
            <main style={{ flex: 1, padding: '2rem' }}>
                <h2 className={styles.elige}>¡Elige tu Pokemon!</h2>
                {tipos.map(tipo => (
  <div key={tipo} style={{ marginBottom: '2rem', borderRadius: '12px', padding: '1rem' }}>
    <h3
      className={
        tipo === 'Fuego'
          ? styles.tipoFuego
          : tipo === 'Agua'
          ? styles.tipoAgua
          : styles.tipoPlanta
      }
    >
      {tipo === 'Fuego' && <span role="img" aria-label="llama">🔥</span>}
      {tipo === 'Fuego' && <span style={{ fontSize: '1.5em' }}>🔥</span>}
      {tipo === 'Agua' && <span role="img" aria-label="ola">🌊</span>}
      {tipo === 'Agua' && <span style={{ fontSize: '1.5em' }}>🐚</span>}
      {tipo === 'Planta' && <span role="img" aria-label="hoja">🌿</span>}
      {tipo === 'Planta' && <span style={{ fontSize: '1.5em' }}>🌸</span>}
      {tipo}
    </h3>
    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
      {productosPorTipo(tipo).map(producto => (
            <div
                key={producto.id}
                className={
                    producto.tipo === 'Fuego'
                    ? styles.cardFuego
                    : producto.tipo === 'Agua'
                    ? styles.cardAgua
                    : styles.cardPlanta
                }
            >
                <h4
                    className={
                    producto.tipo === 'Fuego'
                        ? styles.nombreFuego
                        : producto.tipo === 'Agua'
                        ? styles.nombreAgua
                        : styles.nombrePlanta
                    }
                >
                    {producto.tipo === 'Fuego' && '🔥 '}
                    {producto.tipo === 'Agua' && '💧 '}
                    {producto.tipo === 'Planta' && '🌱 '}
                    {producto.nombre}
                    {producto.tipo === 'Fuego' && ' 🔥'}
                    {producto.tipo === 'Agua' && ' 🌊'}
                    {producto.tipo === 'Planta' && ' 🌸'}
                </h4>
                <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    style={{
                    width: '100px',
                    height: '100px',
                    objectFit: 'contain',
                    display: 'block',
                    margin: '0 auto 1rem auto'
                    }}
                        />
                        <p
                            className={styles.regionPoke}
                            style={{
                            background: tipoBorderColors[producto.tipo],
                            borderColor: tipoBorderColors[producto.tipo]
                            }}
                        >
                            Region: {producto.region}
                        </p>
                        <p
                            className={styles.precioPoke}
                            style={{
                            background: tipoBorderColors[producto.tipo],
                            borderColor: tipoBorderColors[producto.tipo]
                            }}
                        >
                            Precio: S/ {producto.precio.toFixed(2)}
                        </p>
                        <Link
                            to={`/product/${producto.id}`}
                            className={styles.botonDetalle}
                            style={{
                            borderColor: tipoBorderColors[producto.tipo],
                            color: tipoBorderColors[producto.tipo],
                            boxShadow: `0 2px 8px 0 ${tipoBorderColors[producto.tipo]}22`
                            }}
                            onMouseOver={e => {
                            e.target.style.background = tipoBorderColors[producto.tipo];
                            e.target.style.color = '#fff';
                            }}
                            onMouseOut={e => {
                            e.target.style.background = '#fff';
                            e.target.style.color = tipoBorderColors[producto.tipo];
                            }}
                        >
                            Ver detalle
                        </Link>
                        </div>
                    ))}
                    </div>
                </div>
                ))}
            </main>
            <Footer />
        </div>
    </>
    );
};

export default Home;