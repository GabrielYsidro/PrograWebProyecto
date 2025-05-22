import { useState } from 'react';
import { Link } from 'react-router-dom';
import { productos } from '../../constants/Consts.jsx';
import TopBarAdmin from '../../components/TopBarAdmin/TopBarAdmin.jsx';
import Footer from '../../components/Footer/Footer.jsx'
import FormProducto from '../../components/FormProducto/FormProducto.jsx';
import styles from '../../styles/AddProduct.module.css';


export const AddProduct = () => {
    const [busqueda, setBusqueda] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        alert(`Buscando: ${busqueda}`);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const nombre = e.target.nombre.value;
        const color = e.target.color.value;
        const precio = parseFloat(e.target.precio.value);
        const imagen = e.target.imagen.value;

        const newProduct = {
            id: productos.length + 1,
            nombre,
            color,
            precio,
            imagen,
        };

        productos.push(newProduct);
        alert(`Producto "${nombre}" agregado con éxito.`);
        e.target.reset();
    };

    return (
    <>
        <div className={styles['home-background']}></div>
        <div className={styles['home-content']}>
            <TopBarAdmin handleSearch={handleSearch} busqueda={busqueda} setBusqueda={setBusqueda} />
            {/* Main Content */}
            <main className={styles['main-content']}>
                <h1>Agregar Producto</h1>
                <FormProducto />
                <button type="submit" onClick={handleSubmit}>Agregar Producto</button>
            </main>
            <Footer />
        </div>
    </>
    );
};

export default AddProduct;