import { useProductos } from '../../hooks/ProductosContext.jsx';
import TopBar from '../../components/TopBar/TopBar.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import styles from '../../styles/Home.module.css';
import Producto from '../../components/Producto/Producto.jsx';
import categoriasStyles from '../../styles/Categorias.module.css';
import Banner from '../../components/Banner/Banner.jsx';
import NuevasCiudades from '../../components/New Cities/NuevasCiudades.jsx';    
import NewPokemons from '../../components/NewPokemons/NewPokemons.jsx';
import Promo from '../../components/Promo/Promo.jsx';
import { useUserContext } from '../../contexts/userContext.jsx';
import TopBarUser from '../../components/TopBarUser/TopBarUser.jsx';

export const Home = () => {
    const { productos, loading, error } = useProductos();
    const { currentUser } = useUserContext();

    // Filtrar solo productos activos
    const productosActivos = productos.filter(p => p.activo === true);
    
    // Si no hay activos, usar todos los productos
    const productosParaMostrar = productosActivos.length > 0 ? productosActivos : productos;
    
    // NUEVO: Los 12 pokémones con mayor precio para el Banner
    const pokemonesMasCaros = [...productosParaMostrar]
        .sort((a, b) => (b.precio || 0) - (a.precio || 0)) // Ordenar por precio descendente
        .slice(0, 12); // Tomar los primeros 12

    // Agrupar productos por categoría
    const categoriasUnicos = [...new Set(productosParaMostrar.map(p => p.categoria))];
    
    const productosPorcategoria = categoriasUnicos.map(categoria => ({
        categoria,
        productos: productosParaMostrar.filter(p => p.categoria === categoria)
    }));

    const handleInicio = () => {
        // Reset o acciones cuando va al inicio
    };

    if (loading) {
        return (
            <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                height: '100vh',
                fontSize: '1.5rem',
                color: '#666'
            }}>
                Cargando Pokémones...
            </div>
        );
    }

    if (error) {
        return (
            <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                height: '100vh',
                fontSize: '1.5rem',
                color: '#d32f2f'
            }}>
                Error: {error}
                <br />
                <button onClick={() => window.location.reload()} style={{ marginTop: '1rem' }}>
                    Reintentar
                </button>
            </div>
        );
    }

    return (
        <>
            <div className={styles['home-background']}></div>
            <div className={styles['home-content']}>
                {currentUser ? 
                    <TopBarUser handleInicio={handleInicio}/>
                :
                    <TopBar handleInicio={handleInicio}/>
                }
                
                <Banner productos={pokemonesMasCaros} />
                <NewPokemons />
                
                <main style={{ flex: 1, padding: '2rem' }}>
                    <h2 className={styles.elige}>¡Elige tu Pokemon!</h2>
                    
                    <div className={categoriasStyles.productos} style={{ 
                        display: 'flex', 
                        gap: '2rem', 
                        flexWrap: 'wrap', 
                        marginTop: '1.5rem', 
                        justifyContent: 'center' 
                    }}>
                        {productosParaMostrar.length === 0 ? (
                            <div style={{ 
                                color: '#d32f2f', 
                                fontStyle: 'italic',
                                background: '#ffebee',
                                padding: '20px',
                                borderRadius: '5px',
                                border: '2px solid #f44336'
                            }}>
                                No hay productos disponibles.
                            </div>
                        ) : (
                            productosPorcategoria.map(({ categoria, productos }) => (
                                <section
                                    key={categoria}
                                    className={`${categoriasStyles.categoriaFila} ${categoriasStyles['fondo' + categoria?.charAt(0)?.toUpperCase() + categoria?.slice(1)?.toLowerCase()]}`}
                                >
                                    <h3 className={`${categoriasStyles.titulo} ${categoriasStyles['titulo' + categoria?.charAt(0)?.toUpperCase() + categoria?.slice(1)?.toLowerCase()]}`}>
                                    </h3>
                                    <div className={categoriasStyles.productos}>
                                        {productos.map(producto => (
                                            <Producto key={producto.id} producto={producto} />
                                        ))}
                                    </div>
                                </section>
                            ))
                        )}
                    </div>
                    
                    <NuevasCiudades />
                    <Promo />
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Home;