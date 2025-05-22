import { useState } from 'react';
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
        {categorias.map((item) => (
          <li
            key={item.nombre}
            onClick={() => setCategoriaSeleccionada(item.nombre)}
            className={
              categoriaSeleccionada === item.nombre
                ? styles.categoriaSeleccionada
                : styles.categoria
            }
          >
            {item.nombre}
          </li>
        ))}
      </ul>

      <div className={styles.productos}>
        {categoriaSeleccionada && productosFiltrados.map((producto) => (
          <div key={producto.id} className={styles.producto}>
            <h2>{producto.nombre}</h2>
            <p>Color: {producto.color}</p>
            <p>Precio: {producto.precio}</p>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Categorias;
