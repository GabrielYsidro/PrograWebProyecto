import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import TopBarAdmin from '../../components/TopBarAdmin/TopBarAdmin.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import FormProducto from '../../components/FormProducto/FormProducto.jsx';
import styles from '../../styles/DetailProduct.module.css';
import DetalleProducto from '../../components/DetalleProducto/DetalleProducto.jsx';
import { useProductoDetalle } from '../../hooks/useProductoDetalle.jsx';

export const DetailProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);

    const {producto, actualizarProducto,loading, error} = useProductoDetalle (id); // Hook personalizado para obtener el producto por ID
    
    const handleEdit = () => {
        setIsEditing(true);
    }

    const handleUpdateProduct = async (updatedData) => {
        await actualizarProducto(updatedData);
        // Obtén el producto actualizado del contexto
        alert('Producto actualizado con éxito!');
        setIsEditing(false);
        navigate('/listproduct'); // Redirige a la lista de productos
    };

    const handleCancelEdit = () => setIsEditing(false);

    if (loading) return <div>Cargando detalle del producto...</div>;
    if (error) return <div>Error al cargar el producto: {error.message}</div>;
    if (!producto) {
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
                    <h1>Detalle del producto: {producto.nombre}</h1>
                    {isEditing ? (
                        <FormProducto
                            initialValues={producto}
                            onSubmit={handleUpdateProduct}
                            onCancel={handleCancelEdit}
                            submitButtonText="Guardar Cambios"
                            cancelButtonText="Cancelar Edición"
                            isEditMode={true}
                        />
                    ) : (
                        <DetalleProducto producto={producto} modoAdmin={true} onModificar={handleEdit} />
                    )}
                    <Link to="/listproduct">Volver a la lista de productos</Link>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default DetailProduct;