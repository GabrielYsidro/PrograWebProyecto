import { useState, useEffect, use} from 'react';
import { Link } from 'react-router-dom';
import { mockData } from '../../constants/Consts.jsx';
import TopBarAdmin from '../../components/TopBarAdmin/TopBarAdmin.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import '../../styles/Home.module..css';



export const HomeAdmin = () => {
    const [busqueda, setBusqueda] = useState('');
    const [diaAnalizado, setDiaAnalizado] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        alert(`Buscando: ${busqueda}`);
    };
    
    const diaActual = new Date().toLocaleDateString('es-PE',{
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
    })

    useEffect(() => {
        document.body.setAttribute('data-dia-analizado', diaAnalizado || diaActual);
    }, [diaAnalizado, diaActual]);

    const analizarFechas = () => {
        const diaA = document.getElementById('DiaA')?.value;
        const diaD = document.getElementById('DiaD')?.value;

        if (!diaD || !diaA) {
            alert('Por favor seleccionar correctamente las fechas');
            return;
        }

        const [year, month, day] = diaA.split('-');
        const diaFormateado = `${day}/${month}/${year}`;
        setDiaAnalizado(diaFormateado);
    };
    
    return (
        <>
            <div className="home-background"></div>
            <div className="home-content" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <TopBarAdmin handleSearch={handleSearch} busqueda={busqueda} setBusqueda={setBusqueda} />
                {/* Main Content */}
                <main style={{ flex: 1, padding: '2rem' }}>
                    <h1>Resumen del día {diaAnalizado || diaActual}</h1>
                    <form action="submit">
                        <label htmlFor="DiaA">Fecha de inicio:</label>
                        <input type="date" name="DiaA" id="DiaA" />
                        <br />
                        <br />
                        <label htmlFor="DiaD">Fecha de fin:</label>
                        <input type="date" name="DiaD" id="DiaD" />
                        <br />
                        <br />
                        <button type="button" onClick={analizarFechas}>Analizar</button>
                    </form>
                    <div style={{ marginTop: '2rem' }}>
                        <h3>Suma de ordenes del {diaAnalizado || diaActual}: </h3>
                        <p>{mockData.totalOrders}</p>
                        <h3>Suma de nuevos usuarios del {diaAnalizado || diaActual}: </h3>
                        <p>{mockData.newUsers}</p>
                        <h3>Ingreso totales del {diaAnalizado || diaActual}: </h3>
                        <p>{mockData.totalRevenue}</p>
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
}
export default HomeAdmin;

