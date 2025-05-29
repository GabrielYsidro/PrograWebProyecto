import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useProductos } from '../../hooks/ProductosContext.jsx';
import TopBarAdmin from '../../components/TopBarAdmin/TopBarAdmin.jsx';
import Footer from '../../components/Footer/Footer.jsx'
import FormProducto from '../../components/FormProducto/FormProducto.jsx';
import styles from '../../styles/AddProduct.module.css';

export const AddProduct = () => {
    const [busqueda, setBusqueda] = useState('');
    const { agregarProducto } = useProductos();

    return (
    <>
        <div className={styles['home-background']}></div>
        <div className={styles['home-content']}>
            <TopBarAdmin/>
            {/* Main Content */}
            <main className={styles['main-content']}>
                <h1>Agregar Producto</h1>
                <FormProducto 
                    onSubmit={agregarProducto}
                    submitButtonText="Agregar Producto"
                />
            </main>
            <Footer/>
        </div>
    </>
    );
};

export default AddProduct;