import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import TopBarAdmin from '../../components/TopBarAdmin/TopBarAdmin.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import FormProducto from '../../components/FormProducto/FormProducto.jsx';
import { useProductos } from '../../hooks/ProductosContext.jsx'; // Importa el contexto
import styles from '../../styles/DetailProduct.module.css';
import DetalleProducto from '../../components/DetalleProducto/DetalleProducto.jsx';

export const DetailProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [currentProduct, setCurrentProduct] = useState(null);
    const { productos, updateProduct } = useProductos(); // Obtén la función del contexto

    useEffect(() => {
        setIsLoading(true);
        // Encuentra el producto usando el contexto
        const productFinded = productos.find(p => p.id === parseInt(id));

        setTimeout(() => {
            if (productFinded) {
                setCurrentProduct(productFinded);
            } else {
                console.warn(`Producto con ID ${id} no encontrado.`);
                setCurrentProduct(null);
            }
            setIsLoading(false);
        }, 500);
    }, [id]); // Elimina la dependencia en productos

    const handleEdit = () => {
        setIsEditing(true);
    }

    const handleUpdateProduct = (updatedData) => {
        updateProduct(parseInt(id), updatedData); // Llama a la función del contexto
        // Obtén el producto actualizado del contexto
        const updatedProduct = productos.find(p => p.id === parseInt(id));
        setCurrentProduct(updatedProduct);
        alert('Producto actualizado con éxito!');
        setIsEditing(false);
        navigate('/listproduct'); // Redirige a la lista de productos
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
    };

    if (isLoading) {
        return <div>Cargando detalle del producto...</div>;
    }

    if (!currentProduct) {
        return (
            <div>
                <TopBarAdmin/>
                <main className={styles['main-content']}>
                    <h1>Producto no encontrado</h1>
                    <Link to="/listproduct">Volver a la lista de productos</Link>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <>
            <div className={styles['home-background']}></div>
            <div className={styles['home-content']}>
                <TopBarAdmin />
                <main className={styles['main-content']}>
                    <h1>Detalle del producto: {currentProduct.nombre}</h1>

                    {isEditing ? (
                        <FormProducto
                            initialValues={currentProduct}
                            onSubmit={handleUpdateProduct}
                            onCancel={handleCancelEdit}
                            submitButtonText="Guardar Cambios"
                            cancelButtonText="Cancelar Edición"
                            isEditMode={true}
                        />
                    ) : (
                        <DetalleProducto modoAdmin={true} onModificar={handleEdit} />
                    )}
                    <Link to="/listproduct">Volver a la lista de productos</Link>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default DetailProduct;