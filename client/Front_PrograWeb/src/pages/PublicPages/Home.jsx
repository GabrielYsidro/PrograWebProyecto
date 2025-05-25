import { useState } from 'react';
import { productos } from '../../constants/Consts.jsx';
import TopBar from '../../components/TopBar/TopBar.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import styles from '../../styles/Home.module.css';
import Producto from '../../components/Producto/Producto.jsx';

export const Home = () => {
    const [busqueda, setBusqueda] = useState('');
    const [busquedaActiva, setBusquedaActiva] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        setBusquedaActiva(busqueda.trim().toLowerCase());
    };

    // Filtra productos por búsqueda
    const productosFiltrados = productos.filter(
        (p) =>
            !busquedaActiva || p.nombre.toLowerCase().includes(busquedaActiva)
    );

    return (
        <>
            <div className={styles['home-background']}></div>
            <div className={styles['home-content']}>
                <TopBar handleSearch={handleSearch} busqueda={busqueda} setBusqueda={setBusqueda} />
                <main style={{ flex: 1, padding: '2rem' }}>
                    <h2 className={styles.elige}>¡Elige tu Pokemon!</h2>
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

export default Home;