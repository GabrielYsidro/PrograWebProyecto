import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/Categorias.module.css';
import TopBar from '../../components/TopBar/TopBar.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import { categorias, productos } from '../../constants/Consts.jsx';

export const Categorias = () => {
  const [busqueda, setBusqueda] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Buscando: ${busqueda}`);
  };

  const productosFiltrados = productos.filter(
    (producto) => producto.categoria === categoriaSeleccionada
  );

  return (
    <div className={styles.page}>
      <div className={styles.background}></div>
      <TopBar handleSearch={handleSearch} busqueda={busqueda} setBusqueda={setBusqueda} />
      <h1 className={styles.titulo}>Categorías</h1>

      <ul className={styles.listaCategorias}>
        {categorias.map((categoria) => (
          <li
            key={categoria.nombre} onClick={() => setCategoriaSeleccionada(categoria.nombre)}
            className={
              categoriaSeleccionada === categoria.nombre
                ? styles.categoriaSeleccionada
                : styles.categoria
            }
          >
            {categoria.nombre}
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        {categoriaSeleccionada && productosFiltrados.map((producto) => (
          // o style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem', minWidth: '180px' }}
          <div key={producto.id} className={styles.producto}>
            <h3>{producto.nombre}</h3>
            <p>Color: {producto.color}</p>
            <p>Precio: S/ {producto.precio.toFixed(2)}</p>
            <Link to={`/product/${producto.id}`}>Ver detalle</Link>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Categorias;
