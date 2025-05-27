import React, { useState, useEffect } from 'react'; // Corregido: una sola importación de hooks
import { useParams, useNavigate, Link } from 'react-router-dom';
import TopBarAdmin from '../../components/TopBarAdmin/TopBarAdmin.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import FormProducto from '../../components/FormProducto/FormProducto.jsx';
import { productos as allProductsConst, categorias as categoriasConst } from '../../constants/Consts.jsx'; // Renombrado para evitar conflictos
import styles from '../../styles/DetailProduct.module.css';
import DetalleProducto from '../../components/DetalleProducto/DetalleProducto.jsx'; // Asegúrate de que este componente exista

export const DetailProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const [isLoading, setIsLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    
    const [currentProduct, setCurrentProduct] = useState(null); 
    
    const [categorias, setCategorias] = useState([...categoriasConst]); 

    useEffect(() => {
        setIsLoading(true);
        const productFinded = allProductsConst.find(p => p.id === parseInt(id));
        
        setTimeout(() => {
            if (productFinded) {
                setCurrentProduct({
                    ...productFinded,
                });
            } else {
                console.warn(`Producto con ID ${id} no encontrado.`);
                setCurrentProduct(null); 
            }
            setIsLoading(false);
        }, 500);
    }, [id]); 

    const handleEdit = () => {
        setIsEditing(true);
    }

    const handleUpdateProduct = (updatedData) => {
        console.log('Datos a actualizar:', updatedData);
        setCurrentProduct(updatedData); 
        alert('Producto actualizado con éxito (simulado)!');
        setIsEditing(false); 
    };

    const handleCancelEdit = () => {
        console.log('Edición cancelada');
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
                    <Link to="/admin/productos">Volver a la lista de productos</Link>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <>
            <div className={styles['home-background']}></div>
            <div className={styles['home-content']}>
                <TopBarAdmin/>
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
                        // Vista del producto
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