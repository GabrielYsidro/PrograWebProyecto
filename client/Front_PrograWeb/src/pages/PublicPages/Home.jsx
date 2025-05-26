import { productos } from '../../constants/Consts.jsx';
import TopBar from '../../components/TopBar/TopBar.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import styles from '../../styles/Home.module.css';
import Producto from '../../components/Producto/Producto.jsx';
import categoriasStyles from '../../styles/Categorias.module.css';
import Banner from '../../components/Banner/Banner.jsx';
import NuevasCiudades from '../../components/New Cities/NuevasCiudades.jsx';    
import NewPokemons from '../../components/NewPokemons/NewPokemons.jsx';
import Promo from '../../components/Promo/Promo.jsx';



export const Home = () => {
    // Agrupa productos por tipo
    const tiposUnicos = [...new Set(productos.map(p => p.tipo))];
    const productosPorTipo = tiposUnicos.map(tipo => ({
        tipo,
        productos: productos.filter(p => p.tipo === tipo)
    }));

    const handleInicio = () => {
    };

    return (
        <>
            <div className={styles['home-background']}></div>
            <div className={styles['home-content']}>
                <TopBar handleInicio={handleInicio} showSearch={true}/>
                <Banner productos={productos} />
                <NewPokemons />
                <main style={{ flex: 1, padding: '2rem' }}>
                    <h2 className={styles.elige}>¡Elige tu Pokemon!</h2>
                    <div className={categoriasStyles.productos} style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '1.5rem', justifyContent: 'center' }}>
                         {productos.length === 0 ? (
                            <span style={{ color: '#888', fontStyle: 'italic' }}>No hay productos encontrados.</span>
                            ) : (
                            productosPorTipo.map(({ tipo, productos }) => (
                                <section
                                    key={tipo}
                                    className={`${categoriasStyles.categoriaFila} ${categoriasStyles['fondo' + tipo.charAt(0).toUpperCase() + tipo.slice(1).toLowerCase()]}`}
                                >
                                    <h3 className={`${categoriasStyles.titulo} ${categoriasStyles['titulo' + tipo.charAt(0).toUpperCase() + tipo.slice(1).toLowerCase()]}`}></h3>
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