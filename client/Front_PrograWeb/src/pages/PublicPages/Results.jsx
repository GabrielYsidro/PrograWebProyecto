import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import Producto from '../../components/Producto/Producto.jsx';
import TopBar from '../../components/TopBar/TopBar.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import styles from '../../styles/Results.module.css';
import { useProductos } from '../../hooks/ProductosContext.jsx';

export const Results = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const search = params.get('search') || '';
    const { productos } = useProductos();

    const handleInicio = () => {};
    
    // orden: '', 'precio-asc', 'precio-desc', 'nombre-asc', 'nombre-desc'
    const [orden, setOrden] = useState('');

    let productosFiltrados = productos.filter(
    (p) =>
        p.nombre.toLowerCase().includes(search) ||
        (p.region && p.region.toLowerCase().includes(search)) ||
        (p.tipo && p.tipo.toLowerCase().includes(search))
    );

    if (orden === 'precio-asc') {
        productosFiltrados = [...productosFiltrados].sort((a, b) => a.precio - b.precio);
    } else if (orden === 'precio-desc') {
        productosFiltrados = [...productosFiltrados].sort((a, b) => b.precio - a.precio);
    } else if (orden === 'nombre-asc') {
        productosFiltrados = [...productosFiltrados].sort((a, b) => a.nombre.localeCompare(b.nombre));
    } else if (orden === 'nombre-desc') {
        productosFiltrados = [...productosFiltrados].sort((a, b) => b.nombre.localeCompare(a.nombre));
    }

    return (
        <>
            <div className={styles.background}></div>
            <TopBar handleInicio={handleInicio}/>
            <div className={styles.content}>
                <h2 className={styles.title}>Resultados para: "{search}"</h2>
                <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
                    <button onClick={() => setOrden('precio-asc')}>Precio Ascendente</button>
                    <button onClick={() => setOrden('precio-desc')}>Precio Descendente</button>
                    <button onClick={() => setOrden('nombre-asc')}>Nombre A-Z</button>
                    <button onClick={() => setOrden('nombre-desc')}>Nombre Z-A</button>
                    <button onClick={() => setOrden('')}>Quitar orden</button>
                </div>
                {productosFiltrados.length === 0 ? (
                    <span className={styles.noResults}>No hay productos encontrados.</span>
                ) : (
                    <div className={styles.productosGrid}>
                        {productosFiltrados.map(producto => (
                            <Producto key={producto.id} producto={producto} />
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Results;