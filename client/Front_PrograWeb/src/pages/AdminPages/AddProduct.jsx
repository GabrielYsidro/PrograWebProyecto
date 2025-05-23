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

    const handleAgregarProducto = (data) => {
        console.log('Datos a agregar:', data);
        const lastId = productos.length > 0 ? productos[productos.length - 1].id : 0;
        data.id = lastId + 1;
        productos.push(data);
        alert('Producto agregado con éxito!');
        document.getElementById('FormProducto').reset();
    };

    return (
    <>
        <div className={styles['home-background']}></div>
        <div className={styles['home-content']}>
            <TopBarAdmin handleSearch={handleSearch} busqueda={busqueda} setBusqueda={setBusqueda} />
            {/* Main Content */}
            <main className={styles['main-content']}>
                <h1>Agregar Producto</h1>
                <FormProducto 
                    onSubmit={handleAgregarProducto}
                    submitButtonText="Agregar Producto"
                />
            </main>
            <Footer/>
        </div>
    </>
    );
};

export default AddProduct;