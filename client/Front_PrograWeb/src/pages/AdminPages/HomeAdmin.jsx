import { useState } from 'react';
import { Link } from 'react-router-dom';
import { productos } from '../../constants/Consts.jsx';
import TopBar from '../../components/TopBar/TopBar.jsx';
import Footer from '../../components/Footer/Footer.jsx';

export const HomeAdmin = () => {
    const [busqueda, setBusqueda] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        alert(`Buscando: ${busqueda}`);
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <TopBar handleSearch={handleSearch} busqueda={busqueda} setBusqueda={setBusqueda} />
            {/* Main Content */}
            <main style={{ flex: 1, padding: '2rem' }}>
                <h1>Resumen del día (poner día del resumen)</h1>
                <form action="">
                    <input type="date" name="DiaA" id="DiaA" />
                    <input type="date" name="DiaD" id="DiaD" />
                </form>
                <div>
                    <h2>Sumarizados</h2>
                    <p>Suma de ordenes del dia (poner día del resumen): (poner total de ordenes del dia)</p>
                    <p>Suma de nuevos usuarios del día(poner día del resumen): (poner total de nuevos usuarios del dia)</p>
                    <p>Ingreso totales del día (poner dia del resumen): (poner el ingreso total del dia)</p>
                </div>
                {/* Lista de productos */}
                <h2>Productos</h2>
                
            </main>

            <Footer />
        </div>
    );
}
export default HomeAdmin;

