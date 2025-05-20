import { useState } from 'react';
import { Link } from 'react-router-dom';
import { productos } from '../../constants/Consts.jsx';
import TopBar from '../../components/TopBar/TopBar.jsx';
import Footer from '../../components/Footer/Footer.jsx'
import '../../styles/Home.module..css';

export const Home = () => {
    const [busqueda, setBusqueda] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        alert(`Buscando: ${busqueda}`);
    };

    return (
    <>
        <div className="home-background"></div>
        <div className="home-content" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <TopBar handleSearch={handleSearch} busqueda={busqueda} setBusqueda={setBusqueda} />
            {/* Main Content */}
            <main style={{ flex: 1, padding: '2rem' }}>
                <h1>Bienvenido a la tienda</h1>
                {/* Lista de productos */}
                <h2>Productos</h2>
                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                    {productos.map(producto => (
                        <div key={producto.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem', minWidth: '180px' }}>
                            <h3>{producto.nombre}</h3>
                            <p>Color: {producto.color}</p>
                            <p>Precio: S/ {producto.precio.toFixed(2)}</p>
                            <Link to={`/product/${producto.id}`}>Ver detalle</Link>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    </>
    );
};

export default Home;