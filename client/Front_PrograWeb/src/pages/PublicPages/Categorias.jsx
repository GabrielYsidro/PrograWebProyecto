import {useState, useEffect, useContext} from 'react';
import styles from  '../../styles/Categorias.module.css';
import TopBar from '../../components/TopBar/TopBar.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import { categorias } from '../../constants/Consts.jsx';

export const Categorias = () => {

    const [busqueda, setBusqueda] = useState('');
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

    const handleSearch = (e) => {
        e.preventDefault();
        alert(`Buscando: ${busqueda}`);
    };

    return (
        <div className={styles.page}>
            <div className={styles.background}></div>
            <TopBar handleSearch={handleSearch} busqueda={busqueda} setBusqueda={setBusqueda} />
            <h1 className={styles.titulo}>Categorias</h1>
            <ul className={styles.lista}>
                {categorias.map((item, index) => (
                    <li
                    key={index}
                    onClick={() => setCategoriaSeleccionada(item.nombre)}
                    className={
                        categoriaSeleccionada === item.nombre
                        ? styles.categoriaSeleccionada
                        : styles.categoria
                    }
                    >
                    {item.nombre}
                    </li>
                ))}
            </ul>
            <Footer />
        </div>
);


}

export default Categorias;
