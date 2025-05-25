import { useState } from 'react';
import styles from '../../styles/Categorias.module.css';
import TopBar from '../../components/TopBar/TopBar.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import { categorias, productos } from '../../constants/Consts.jsx';
import Producto from '../../components/Producto/Producto.jsx';

export const Categorias = () => {
  const [busqueda, setBusqueda] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  const productosFiltrados = productos.filter(
    (producto) =>
      (!categoriaSeleccionada || producto.tipo === categoriaSeleccionada) &&
      (!busqueda.trim() || producto.nombre.toLowerCase().includes(busqueda.trim().toLowerCase()))
  );

  return (
    <div className={styles.page}>
      <div className={styles.background}></div>
      <TopBar handleSearch={e => { e.preventDefault(); }} busqueda={busqueda} setBusqueda={setBusqueda} />
      <h2 className={styles.eligeMargin}>Categorías</h2>

      <ul className={styles.listaCategoriasMargin}>
        <li
          onClick={() => setCategoriaSeleccionada(null)}
          className={!categoriaSeleccionada ? styles.categoriaSeleccionada : styles.categoria}
        >
          Todas
        </li>
        {categorias.map((categoria) => (
          <li
            key={categoria.nombre}
            onClick={() => setCategoriaSeleccionada(categoria.nombre)}
            className={categoriaSeleccionada === categoria.nombre ? styles.categoriaSeleccionada : styles.categoria}
            style={{
              background: categoria.color,
              borderColor: categoria.color,
              color: categoriaSeleccionada === categoria.nombre ? '#fff' : '#222'
            }}
          >
            {(categoria.emoji || '✨') + ' '}{categoria.nombre}
          </li>
        ))}
      </ul>

      <div className={styles.productos + ' ' + styles.marginLeft}>
        {productosFiltrados.length === 0 && (
          <p className={styles.noProductos}>No se encontraron productos.</p>
        )}
        {productosFiltrados.map((producto) => (
          <Producto key={producto.id} producto={producto} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Categorias;
