import { useState } from 'react';
import { Link } from 'react-router-dom';
import { productos } from '../../constants/Consts.jsx';
import TopBar from '../../components/TopBar/TopBar.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import '../../styles/Home.module..css';


function getMonthNumberFromDiaD() {
    const endDateInput = document.getElementById('DiaD');
    if (!endDateInput || !endDateInput.value) return null;
    const date = new Date(endDateInput.value);
    // Los meses en JavaScript empiezan en 0, así que sumamos 1
    return date.getMonth() + 1;
}


export const HomeAdmin = () => {
    const [busqueda, setBusqueda] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        alert(`Buscando: ${busqueda}`);
    };
    let dia = new Date().toLocaleDateString('es-PE', { day: '2-digit', month: '2-digit' });
    

    return (
        <>
            <div className="home-background"></div>
            <div className="home-content" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <TopBar handleSearch={handleSearch} busqueda={busqueda} setBusqueda={setBusqueda} />
                {/* Main Content */}
                <main style={{ flex: 1, padding: '2rem' }}>
                    <h1>Resumen del día {dia}</h1>
                    <form action="submit">
                        <label htmlFor="DiaA">Fecha de inicio:</label>
                        <input type="date" name="DiaA" id="DiaA" />
                        <br />
                        <br />
                        <label htmlFor="DiaD">Fecha de fin:</label>
                        <input type="date" name="DiaD" id="DiaD" />
                        <br />
                        <br />
                    </form>
                    <div>
                        <h2>Sumarizados</h2>
                        <p>Suma de ordenes del {dia}: (poner total de ordenes del dia)</p>
                        <p>Suma de nuevos usuarios del {dia}: (poner total de nuevos usuarios del dia)</p>
                        <p>Ingreso totales del {dia}: (poner el ingreso total del dia)</p>
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
}
export default HomeAdmin;

