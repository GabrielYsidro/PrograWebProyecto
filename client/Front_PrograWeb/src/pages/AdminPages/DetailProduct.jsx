import { useState } from 'react';
import { Link } from 'react-router-dom';
import { productos as productosData } from '../../constants/Consts.jsx';
import TopBarAdmin from '../../components/TopBarAdmin/TopBarAdmin.jsx';
import Footer from '../../components/Footer/Footer.jsx'
import '../../styles/Home.module..css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

export const DetailProduct = () => {
    const [busqueda, setBusqueda] = useState('');
    const [productos, setProductos] = useState(productosData);

    const handleSearch = (e) => {
        e.preventDefault();
        alert(`Buscando: ${busqueda}`);
    };

    const { id } = useParams();
    const [product, setProduct] = useState({
        nombre: '',
        color: '',
        precio: 0,
        imagen: ''
    });

    useEffect(() => {
        const productFinded = productos.find(producto => producto.id === parseInt(id));
        if (productFinded) {
            setProduct(productFinded);
        }
    }, [id, productos]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct(prevProduct => ({
            ...prevProduct,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Encuentra el índice del producto que se está editando
        const productIndex = productos.findIndex(p => p.id === product.id);

        if (productIndex !== -1) {
            // Actualiza el producto en el array de productos
            const updatedProductos = [...productos];
            updatedProductos[productIndex] = product;

            // Actualiza el estado con el nuevo array de productos
            setProductos(updatedProductos);

            // Opcional: Actualiza también el array original si es necesario
            // productosData = updatedProductos; // Esto no funcionará porque productosData es una constante

            alert(`Producto actualizado: ${JSON.stringify(product)}`);
            setIsEditing(false);
        } else {
            alert('Producto no encontrado');
        }
    };

    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        setIsEditing(true);
    };

    return (
        <>
            <div className="home-background"></div>
            <div className="home-content" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <TopBarAdmin handleSearch={handleSearch} busqueda={busqueda} setBusqueda={setBusqueda} />
                {/* Main Content */}
                <main style={{ flex: 1, padding: '2rem' }}>

                    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '2rem auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <h1>Detalle del producto</h1>
                        <label>
                            Nombre del producto:
                            <input type="text" name="nombre" value={product.nombre} onChange={handleChange} required disabled={!isEditing} />
                        </label>
                        <label>
                            Color:
                            <input type="text" name="color" value={product.color} onChange={handleChange} required disabled={!isEditing} />
                        </label>
                        <label>
                            Precio:
                            <input type="number" name="precio" value={product.precio} onChange={handleChange} min="0" step="0.01" required disabled={!isEditing} />
                        </label>
                        <label>
                            Imagen (URL):
                            <input type="url" name="imagen" value={product.imagen} onChange={handleChange} required disabled={!isEditing} />
                        </label>

                        {!isEditing ? (
                            <button type="button" onClick={handleEdit}>Modificar</button>
                        ) : (
                            <button type="submit">Guardar Cambios</button>
                        )}
                    </form>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default DetailProduct;