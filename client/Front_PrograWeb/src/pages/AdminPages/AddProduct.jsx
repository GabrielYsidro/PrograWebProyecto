import { useState } from 'react';
import { Link } from 'react-router-dom';
import { productos } from '../../constants/Consts.jsx';
import TopBarAdmin from '../../components/TopBarAdmin/TopBarAdmin.jsx';
import Footer from '../../components/Footer/Footer.jsx'
import '../../styles/Home.module..css';

export const AddProduct = () => {
    const [busqueda, setBusqueda] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        alert(`Buscando: ${busqueda}`);
    };

    return (
    <>
        <div className="home-background"></div>
        <div className="home-content" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <TopBarAdmin handleSearch={handleSearch} busqueda={busqueda} setBusqueda={setBusqueda} />
            {/* Main Content */}
            <main style={{ flex: 1, padding: '2rem' }}>
                
                <form style={{ maxWidth: '400px', margin: '2rem auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <h1>Agregar Producto</h1>
                    <label>
                        Nombre del producto:
                        <input type="text" name="nombre" required />
                    </label>
                    <label>
                        Color:
                        <input type="text" name="color" required />
                    </label>
                    <label>
                        Precio:
                        <input type="number" name="precio" min="0" step="0.01" required />
                    </label>
                    <label>
                        Imagen (URL):
                        <input type="url" name="imagen" required />
                    </label>
                    <button type="submit">Agregar Producto</button>
                </form>
            </main>
            <Footer />
        </div>
    </>
    );
};

export default AddProduct;