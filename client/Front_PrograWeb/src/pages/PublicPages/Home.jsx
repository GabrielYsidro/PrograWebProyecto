import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
    const [busqueda, setBusqueda] = useState('');

    // Lista de productos de ejemplo
    const productos = [
        { id: 1, nombre: 'Camiseta', color: 'Rojo', precio: 49.99 },
        { id: 2, nombre: 'Pantalón', color: 'Azul', precio: 89.99 },
        { id: 3, nombre: 'Zapatillas', color: 'Negro', precio: 129.99 },
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        alert(`Buscando: ${busqueda}`);
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {/* Top Bar */}
            <nav style={{ background: '#222', padding: '1rem' }}>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                    <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Inicio</Link>
                    <Link to="/results" style={{ color: '#fff', textDecoration: 'none' }}>Resultados</Link>
                    <Link to="/product/1" style={{ color: '#fff', textDecoration: 'none' }}>Producto</Link>
                    <Link to="/carrito" style={{ color: '#fff', textDecoration: 'none' }}>Carrito</Link>
                    <Link to="/checkout" style={{ color: '#fff', textDecoration: 'none' }}>Checkout</Link>
                    <Link to="/greeting" style={{ color: '#fff', textDecoration: 'none' }}>Greeting</Link>
                    <Link to="/login" style={{ color: '#fff', textDecoration: 'none' }}>Login</Link>
                    <Link to="/register" style={{ color: '#fff', textDecoration: 'none' }}>Registro</Link>
                    <Link to="/user/1" style={{ color: '#fff', textDecoration: 'none' }}>Usuario</Link>
                    {/* Barra de búsqueda */}
                    <form onSubmit={handleSearch} style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
                        <input
                            type="text"
                            placeholder="Buscar productos..."
                            value={busqueda}
                            onChange={e => setBusqueda(e.target.value)}
                            style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
                        />
                        <button type="submit" style={{ marginLeft: '0.5rem', padding: '0.5rem 1rem', borderRadius: '4px', border: 'none', background: '#fff', color: '#222', cursor: 'pointer' }}>
                            Buscar
                        </button>
                    </form>
                </div>
            </nav>

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

            {/* Footer */}
            <footer style={{ background: '#eee', padding: '1rem', textAlign: 'center' }}>
                <Link to="/" style={{ margin: '0 1rem' }}>Inicio</Link>
                <Link to="/carrito" style={{ margin: '0 1rem' }}>Carrito</Link>
                <Link to="/login" style={{ margin: '0 1rem' }}>Login</Link>
                <span style={{ margin: '0 1rem' }}>© Ecommerce</span>
            </footer>
        </div>
    );
};

export default Home;