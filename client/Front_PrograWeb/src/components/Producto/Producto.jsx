import { Link } from 'react-router-dom';
import styles from './Producto.module.css';
import { useCartContext } from '../../contexts/CartContext.jsx';
import { useState } from 'react';


function Producto({ producto }) {
  const { addItem } = useCartContext();
  const [showMsg, setShowMsg] = useState(false);

  const categoria = producto.categoria
    ? producto.categoria.charAt(0).toUpperCase() + producto.categoria.slice(1).toLowerCase()
    : '';

  const cateClase = producto.categoria
    ? styles['borde' + producto.categoria.charAt(0).toUpperCase() + producto.categoria.slice(1).toLowerCase()] //gepeto
    : '';


  const handleAdd = () => {
    addItem(producto);
    setShowMsg(true);
    setTimeout(() => {
      setShowMsg(false);
    }, 1000);
  };

  return (
    <div className={`${styles.producto} ${cateClase}`}>
      <h2 className={`${styles.nombre} ${styles['categoria' + categoria]}`}>{producto.nombre}</h2>
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className={styles.imagen}
      />
      <p className={`${styles.categoria} ${styles['categoria' + categoria]}`}>{producto.categoria}</p>
      <p className={`${styles.region} ${styles['region' + categoria]}`}>{producto.region}</p>
      <p className={`${styles.precio} ${styles['precio' + categoria]}`}>Precio: ${producto.precio}</p>
      <Link
        to={`/product/${producto.id}`}
        className={`${styles.botonDetalle} ${styles['boton' + categoria]}`}
      >
        Ver detalle
      </Link>
      <button
        className={`${styles.botonDetalle} ${styles['boton' + categoria]} ${showMsg ? styles.botonAgregado : ''}`}
        type="button"
        onClick={handleAdd}
        disabled={showMsg}
      >
        {showMsg ? (
          <span className={styles.checkAnimado}>✔ Agregado</span>
        ) : (
          'Agregar al carrito'
        )}
      </button>
    </div>
  );
}

export default Producto;