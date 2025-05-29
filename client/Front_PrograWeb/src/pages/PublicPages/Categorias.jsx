import { useState } from 'react';
import styles from '../../styles/Categorias.module.css';
import Producto from '../../components/Producto/Producto.jsx';
import { useProductos } from '../../hooks/ProductosContext.jsx';
import { useCategoriaContext } from '../../hooks/CategoriaContext.jsx';
import BotonOrd from '../../components/BotonOrd/BotonOrd.jsx';

export const Categorias = () => {
  const [busqueda, setBusqueda] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [orden, setOrden] = useState('nombreA');
  const { categoriasItems } = useCategoriaContext();
  const { productos } = useProductos();

  const productosFiltrados = productos
    .filter(
      (producto) =>
        (!categoriaSeleccionada || producto.categoria === categoriaSeleccionada) &&
        (!busqueda.trim() || producto.nombre.toLowerCase().includes(busqueda.trim().toLowerCase()))
    )
    .slice() // para no mutar el array original
    .sort((a, b) => {
      if (orden === 'nombreA') return a.nombre.localeCompare(b.nombre);
      if (orden === 'nombreZ') return b.nombre.localeCompare(a.nombre);
      if (orden === 'des') return b.precio - a.precio;
      if (orden === 'asc') return a.precio - b.precio;
      return 0;
    });

  return (
    <div className={styles.page}>
      <div className={styles.background}></div>
      
      <h2 className={styles.eligeMargin}>Categorías</h2>
      <BotonOrd productosFiltrados={productosFiltrados} orden={orden} setOrden={setOrden} />
      <ul className={styles.listaCategoriasMargin}>
        <li
          onClick={() => setCategoriaSeleccionada(null)}
          className={!categoriaSeleccionada ? styles.categoriaSeleccionada : styles.categoria}
        >
          Todas
        </li>
        {categoriasItems.map((categoria) => (
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
      
    </div>
  );
};

export default Categorias;
