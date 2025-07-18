import { useState } from 'react';
import styles from '../../styles/Categorias.module.css';
import Producto from '../../components/Producto/Producto.jsx';
import { useProductos } from '../../hooks/ProductosContext.jsx';
import { useCategoriaContext } from '../../hooks/CategoriaContext.jsx';
import BotonOrd from '../../components/BotonOrd/BotonOrd.jsx';
import TopBar from '../../components/TopBar/TopBar.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import { useUserContext } from '../../contexts/userContext.jsx';
import TopBarUser from '../../components/TopBarUser/TopBarUser.jsx';

export const Categorias = () => {
  const [busqueda, setBusqueda] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [orden, setOrden] = useState('nombreA');
  const { categoriasItems } = useCategoriaContext();
  const { productos } = useProductos();
  const { currentUser } = useUserContext();

  const handleInicio = () => {};

  const productosFiltrados = productos
    .filter(producto => producto.activo === true)
    .filter(
      (producto) =>
        (!categoriaSeleccionada || producto.categoria === categoriaSeleccionada) &&
        (!busqueda.trim() || producto.nombre.toLowerCase().includes(busqueda.trim().toLowerCase()))
    )
    .sort((a, b) => {
      if (orden === 'nombreA') return a.nombre.localeCompare(b.nombre);
      if (orden === 'nombreZ') return b.nombre.localeCompare(a.nombre);
      if (orden === 'des') return b.precio - a.precio;
      if (orden === 'asc') return a.precio - b.precio;
      return 0;
    });

  return (
    <>
      <div className={styles.background}></div>
      {currentUser
        ? <TopBarUser handleInicio={handleInicio} />
        : <TopBar handleInicio={handleInicio} />
      }
      <div className={styles.page}>
        <div className={styles.content}>
          <h2 className={styles.eligeMargin}>¡Explora por Categoría!</h2>
          <div className={styles.filtros} style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <BotonOrd productosFiltrados={productosFiltrados} orden={orden} setOrden={setOrden} />
          </div>
          <ul className={styles.categoriasRow}>
            <li
              onClick={() => setCategoriaSeleccionada(null)}
              className={`${styles.categoriaBtn} ${!categoriaSeleccionada ? styles.categoriaSeleccionada : ''}`}
              style={{ cursor: "pointer" }}
            >
              <span className={styles.categoriaIcon} role="img" aria-label="Todas">⭐</span>
              Todas
            </li>
            {categoriasItems.map(cat => (
              <li
                key={cat.id}
                onClick={() => setCategoriaSeleccionada(cat.name)}
                className={`${styles.categoriaBtn} ${categoriaSeleccionada === cat.name ? styles.categoriaSeleccionada : ''}`}
                style={{
                  cursor: "pointer",
                  background: cat.color || "#eee",
                  color: "#222"
                }}
              >
                <span className={styles.categoriaIcon} role="img" aria-label={cat.name}>{cat.emoji || "❓"}</span>
                {cat.name}
              </li>
            ))}
          </ul>
          <h3 className={styles.eligeMargin}>
            {categoriaSeleccionada ? `Productos de ${categoriaSeleccionada}` : 'Todos los productos'}
          </h3>
          {productosFiltrados.length === 0 ? (
            <span className={styles.noProductos}>No se encontraron productos.</span>
          ) : (
            <div className={styles.productos}>
              {productosFiltrados.map((producto) => (
                <Producto key={producto.id} producto={producto} />
              ))}
            </div>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Categorias;