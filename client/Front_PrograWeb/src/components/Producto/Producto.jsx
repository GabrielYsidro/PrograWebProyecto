import { Link } from 'react-router-dom';
import styles from './Producto.module.css';
import { useCartContext } from '../../hooks/CartContext.jsx';
import { useState } from 'react';

function Producto({ producto }) {
  const { addItem } = useCartContext();
  const [showMsg, setShowMsg] = useState(false);

  const handleAdd = () => {
    addItem(producto);
    setShowMsg(true);
    setTimeout(() => {
      setShowMsg(false);
    }, 1000);
  };

  return (
    <div className={styles.producto}>
      <h2 className={styles.nombre}>{producto.nombre}</h2>
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className={styles.imagen}
      />
      <p className={styles.tipo}>{producto.tipo}</p>
      <p className={styles.region}>{producto.region}</p>
      <p className={styles.precio}>Precio: ${producto.precio}</p>
      <Link
        to={`/product/${producto.id}`}
        className={styles.botonDetalle}
      >
        Ver detalle
      </Link>
      <button
        className={`${styles.botonDetalle} ${showMsg ? styles.botonAgregado : ''}`}
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