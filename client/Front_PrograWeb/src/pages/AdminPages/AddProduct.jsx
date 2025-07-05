import { useState } from 'react';
import { Link } from 'react-router-dom';
import TopBarAdmin from '../../components/TopBarAdmin/TopBarAdmin.jsx';
import Footer from '../../components/Footer/Footer.jsx'
import FormProducto from '../../components/FormProducto/FormProducto.jsx';
import styles from '../../styles/AddProduct.module.css';
import { useProductosApi } from '../../hooks/useProductApi.jsx';

export const AddProduct = () => {
    const { agregarProducto } = useProductosApi();

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