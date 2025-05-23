import { useState } from 'react';
import { Link } from 'react-router-dom';
import { productos } from '../../constants/Consts.jsx';
import TopBarAdmin from '../../components/TopBarAdmin/TopBarAdmin.jsx';
import Footer from '../../components/Footer/Footer.jsx'
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../hooks/useSearch.jsx';
import { usePagination } from '../../hooks/usePagination.jsx';
import React from 'react';
import styles from '../../styles/ListProduct.module.css';


export const ListProduct = () => {
    const [busqueda, setBusqueda] = useState('');
    const ITEMS_PER_PAGE = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const [allProducts, setAllProducts] = useState(productos);

    const navigate = useNavigate();

    const filterProducts = (product) => {
          const searchTerm = busqueda.toLowerCase();
          return (
                product.nombre.toLowerCase().includes(searchTerm) ||
                String(product.id).includes(searchTerm)
          );
     };

    const filteredProducts = allProducts.filter(filterProducts);
    const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
    const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedProducts = filteredProducts.slice(startIdx, startIdx + ITEMS_PER_PAGE);

    const handleSearch = (e) => {
        e.preventDefault();
        alert(`Buscando: ${busqueda}`);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleDetail = (id) => {
    navigate(`/detailproduct/${id}`);
    };

    const handleToggleActivo = (id) => {
        setAllProducts(prev =>
            prev.map(p =>
                p.id === id ? { ...p, activo: !p.activo } : p
            )
        );
    };

    return (
        <>
            <div className={styles['home-background']}></div>
            <div className={styles['home-content']} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <TopBarAdmin handleSearch={() => { }} busqueda={busqueda} setBusqueda={setBusqueda} />
                <main className={styles['main-content']}>
                    <form onSubmit={(e) => e.preventDefault()} style={{ marginBottom: '1rem' }}>
                        <input
                            type="text"
                            placeholder="Filtrar por nombre o ID"
                            value={busqueda}
                            onChange={(e) => setBusqueda(e.target.value)}
                            style={{ padding: '0.5rem', marginRight: '0.5rem' }}
                        />
                    </form>
                    <h1>Lista de productos</h1>
                    <div>
                        <table className={styles['tableProduct']}>
                            <thead>
                                <tr>
                                    <th className={styles['tituloTabla']}>ID</th>
                                    <th className={styles['tituloTabla']}>Nombre</th>
                                    <th className={styles['tituloTabla']}>Precio</th>
                                    <th className={styles['tituloTabla']}>Stock</th>
                                    <th className={styles['tituloTabla']}>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {paginatedProducts.length === 0 ? (
                                    <tr>
                                        <td colSpan="5" style={{ textAlign: 'center', padding: '1rem' }}>No hay productos</td>
                                    </tr>
                                ) : (
                                    paginatedProducts.map(product => (
                                        <tr key={product.id}>
                                            <td className={styles['ValorTabla']}>{product.id}</td>
                                            <td className={styles['ValorTabla']}>{product.nombre}</td>
                                            <td className={styles['ValorTabla']}>${product.precio}</td>
                                            <td className={styles['ValorTabla']}>{product.stock}</td>
                                            <td className={styles['ValorTabla']}>
                                                <button onClick={() => handleDetail(product.id)}>
                                                    Ver Detalle
                                                </button>
                                                <button onClick={() => handleToggleActivo(product.id)}>
                                                    {product.activo ? 'Activar' : 'Desactivar'}
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                        <div className={styles['pagination']}>
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                Anterior
                            </button>
                            {[...Array(totalPages)].map((_, idx) => (
                                <button
                                    key={idx + 1}
                                    onClick={() => handlePageChange(idx + 1)}
                                    style={{
                                        fontWeight: currentPage === idx + 1 ? 'bold' : 'normal'
                                    }}
                                >
                                    {idx + 1}
                                </button>
                            ))}
                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                            >
                                Siguiente
                            </button>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
};
export default ListProduct;