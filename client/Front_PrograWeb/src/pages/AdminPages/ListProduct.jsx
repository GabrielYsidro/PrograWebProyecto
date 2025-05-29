import { useState } from 'react';
import { Link } from 'react-router-dom';
import TopBarAdmin from '../../components/TopBarAdmin/TopBarAdmin.jsx';
import Footer from '../../components/Footer/Footer.jsx'
import { useNavigate } from 'react-router-dom';
import React from 'react';
import styles from '../../styles/ListProduct.module.css';
import { useProductos } from '../../hooks/ProductosContext.jsx';
import TablaProductos from '../../components/TableAdmin/TableAdmin.jsx';
import Pagination from '../../components/Pagination/Pagination.jsx';
import SearchProducto from '../../components/SearchProduct/SearchProduct.jsx';

export const ListProduct = () => {
    const ITEMS_PER_PAGE = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const { productos, updateProduct } = useProductos();
    const navigate = useNavigate();

    const [busqueda, setBusqueda] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(productos);
    
    const handleBusqueda = (valorBusqueda, productosContext) => {
        setBusqueda(valorBusqueda);
        const searchTerm = valorBusqueda.toLowerCase();
        const filtrados = productosContext.filter(product =>
            product.nombre.toLowerCase().includes(searchTerm) ||
            String(product.id).includes(searchTerm)
        );
        setFilteredProducts(filtrados);
        setCurrentPage(1);
    };

    React.useEffect(() => {
        handleBusqueda(busqueda, productos);
    }, [productos]);

    const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
    const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedProducts = filteredProducts.slice(startIdx, startIdx + ITEMS_PER_PAGE);
    
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleDetail = (id) => {
        navigate(`/detailproduct/${id}`);
    };

    const handleToggleActivo = (id) => {
        const producto = productos.find(p => p.id === id);
        if (producto) {
            updateProduct(id, { ...producto, activo: !producto.activo });
        }
    };

    return (
        <>
            <div className={styles['home-background']}></div>
            <div className={styles['home-content']} >
                <TopBarAdmin />
                <main className={styles['main-content']}>
                    <SearchProducto onBusqueda={handleBusqueda} />
                    <h1>Lista de productos</h1>
                    <div>
                        <TablaProductos 
                            productos={paginatedProducts}
                            onDetalle={handleDetail}
                            onToggleActivo={handleToggleActivo}
                            styles={styles}
                        />
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
};
export default ListProduct;