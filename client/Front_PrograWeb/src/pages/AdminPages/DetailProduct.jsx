import React, { useState, useEffect } from 'react'; // Corregido: una sola importación de hooks
import { useParams, useNavigate, Link } from 'react-router-dom';
import TopBarAdmin from '../../components/TopBarAdmin/TopBarAdmin.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import FormProducto from '../../components/FormProducto/FormProducto.jsx';
import { productos as allProductsConst, categorias as categoriasConst } from '../../constants/Consts.jsx'; // Renombrado para evitar conflictos
import styles from '../../styles/DetailProduct.module.css';

export const DetailProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [busqueda, setBusqueda] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    
    // Estado para el producto individual que se está viendo/editando
    const [currentProduct, setCurrentProduct] = useState(null); 
    
    // Estado para las categorías, pasado al FormProducto
    const [categorias, setCategorias] = useState([...categoriasConst]); 

    // Simula la carga del producto específico.
    // Este useEffect ahora solo se encarga de cargar el 'currentProduct'.
    useEffect(() => {
        setIsLoading(true);
        // Encuentra el producto de la constante importada
        const productFinded = allProductsConst.find(p => p.id === parseInt(id));
        
        // Simula un delay de carga
        setTimeout(() => {
            if (productFinded) {
                setCurrentProduct({
                    ...productFinded,
                });
            } else {
                console.warn(`Producto con ID ${id} no encontrado.`);
                setCurrentProduct(null); // O redirigir a una página 404
            }
            setIsLoading(false);
        }, 500);
    }, [id]); // Dependencia del ID para recargar si cambia la URL

    const handleSearch = (e) => {
        e.preventDefault();
        alert(`Buscando: ${busqueda}`);
        // Aquí podrías redirigir a una página de resultados de búsqueda
    };

    const handleUpdateProduct = (updatedData) => {
        console.log('Datos a actualizar:', updatedData);
        setCurrentProduct(updatedData); 
        alert('Producto actualizado con éxito (simulado)!');
        setIsEditing(false); // Volver al modo de vista
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
                <TopBarAdmin handleSearch={handleSearch} busqueda={busqueda} setBusqueda={setBusqueda} />
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
                <TopBarAdmin handleSearch={handleSearch} busqueda={busqueda} setBusqueda={setBusqueda} />
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
                        <div className={styles['product-details-view']}>
                            <p><strong>Nombre:</strong> {currentProduct.nombre}</p>
                            <p><strong>Tipo:</strong> {currentProduct.tipo}</p>
                            <p><strong>Región:</strong> {currentProduct.region}</p>
                            <p><strong>Precio:</strong> ${currentProduct.precio}</p>
                            <p><strong>Imagen:</strong> <img src={currentProduct.imagen} alt={currentProduct.nombre} style={{ maxWidth: '200px' }} /></p>
                            
                            <div className={styles['button-group']}>
                                <button type="button" onClick={() => setIsEditing(true)}>Modificar Producto</button>
                            </div>
                        </div>
                    )}
                    <Link to="/listproduct">Volver a la lista de productos</Link>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default DetailProduct;