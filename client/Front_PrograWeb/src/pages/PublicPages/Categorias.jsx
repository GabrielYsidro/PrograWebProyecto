import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/Categorias.module.css';
import TopBar from '../../components/TopBar/TopBar.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import { categorias, productos } from '../../constants/Consts.jsx';

export const Categorias = () => {
  const [busqueda, setBusqueda] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  // Busca el color y emoji según el tipo usando categorias
  const getCategoria = (tipo) => categorias.find(c => c.nombre === tipo) || {};

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

      {/* Productos dinámicos */}
      <div className={styles.productos + ' ' + styles.marginLeft}>
        {productosFiltrados.length === 0 && (
          <p className={styles.noProductos}>No se encontraron productos.</p>
        )}
        {productosFiltrados.map((producto) => {
          const cat = getCategoria(producto.tipo);
          return (
            <div
              key={producto.id}
              className={styles.producto}
              style={{
                border: `2.5px solid ${cat.color || '#888'}`,
                background: cat.color || '#eee'
              }}
            >
              <h4
                className={styles.nombreProducto}
                style={{
                  color: '#222'
                }}
              >
                {(cat.emoji || '✨') + ' '}
                {producto.nombre}
                {' ' + (cat.emoji || '')}
              </h4>
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className={styles.imagenProducto}
              />
              <p
                className={styles.regionProducto}
                style={{
                  background: cat.color || '#ccc',
                  borderColor: cat.color || '#ccc'
                }}
              >
                Región: {producto.region}
              </p>
              <p
                className={styles.precioProducto}
                style={{
                  background: cat.color || '#ccc',
                  borderColor: cat.color || '#ccc'
                }}
              >
                Precio: S/ {producto.precio.toFixed(2)}
              </p>
              <Link
                to={`/product/${producto.id}`}
                className={styles.botonDetalle}
                style={{
                  borderColor: cat.color || '#888',
                  color: cat.color || '#888',
                  boxShadow: `0 2px 8px 0 ${(cat.color || '#888')}22`
                }}
                onMouseOver={e => {
                  e.target.style.background = cat.color || '#888';
                  e.target.style.color = '#fff';
                }}
                onMouseOut={e => {
                  e.target.style.background = '#fff';
                  e.target.style.color = cat.color || '#888';
                }}
              >
                Ver detalle
              </Link>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Categorias;
