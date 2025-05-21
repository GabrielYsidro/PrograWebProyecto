import { useState } from 'react';
import { Link } from 'react-router-dom';
import { productos } from '../../constants/Consts.jsx';
import TopBarAdmin from '../../components/TopBarAdmin/TopBarAdmin.jsx';
import Footer from '../../components/Footer/Footer.jsx'
import '../../styles/Home.module..css';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../hooks/useSearch.js';
import { usePagination } from '../../hooks/usePagination.js';
import React from 'react';


export const ListProduct = () => {
    const [busqueda, setBusqueda] = useState('');
    const ITEMS_PER_PAGE = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const [allProducts, setAllProducts] = useState(productos);

    const navigate = useNavigate();

    const filteredProducts = allProducts.filter(product =>
        product.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

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
            <div className="home-background"></div>
            <div className="home-content" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <TopBarAdmin handleSearch={handleSearch} busqueda={busqueda} setBusqueda={setBusqueda} />
                <main style={{ flex: 1, padding: '2rem' }}>
                    <h1>Lista de productos</h1>
                    <div>
                        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1rem' }}>
                            <thead>
                                <tr>
                                    <th style={{ border: '1px solid #ccc', padding: '8px' }}>ID</th>
                                    <th style={{ border: '1px solid #ccc', padding: '8px' }}>Nombre</th>
                                    <th style={{ border: '1px solid #ccc', padding: '8px' }}>Precio</th>
                                    <th style={{ border: '1px solid #ccc', padding: '8px' }}>Stock</th>
                                    <th style={{ border: '1px solid #ccc', padding: '8px' }}>Acciones</th>
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
                                            <td style={{ border: '1px solid #ccc', padding: '8px' }}>{product.id}</td>
                                            <td style={{ border: '1px solid #ccc', padding: '8px' }}>{product.nombre}</td>
                                            <td style={{ border: '1px solid #ccc', padding: '8px' }}>${product.precio}</td>
                                            <td style={{ border: '1px solid #ccc', padding: '8px' }}>{product.stock}</td>
                                            <td style={{ border: '1px solid #ccc', padding: '8px' }}>
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
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
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