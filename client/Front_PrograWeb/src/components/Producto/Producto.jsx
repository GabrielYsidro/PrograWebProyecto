import { Link } from 'react-router-dom';
import styles from './Producto.module.css';
import { useCartContext } from '../../hooks/CartContext.jsx';
import { useState } from 'react';


function Producto({ producto }) {
  const { addItem } = useCartContext();
  const [showMsg, setShowMsg] = useState(false);

  const tipo = producto.tipo
    ? producto.tipo.charAt(0).toUpperCase() + producto.tipo.slice(1).toLowerCase()
    : '';

  const tipoClase = producto.tipo
    ? styles['borde' + producto.tipo.charAt(0).toUpperCase() + producto.tipo.slice(1).toLowerCase()] //gepeto
    : '';


  const handleAdd = () => {
    addItem(producto);
    setShowMsg(true);
    setTimeout(() => {
      setShowMsg(false);
    }, 1000);
  };

  return (
    <div className={`${styles.producto} ${tipoClase}`}>
      <h2 className={`${styles.nombre} ${styles['tipo' + tipo]}`}>{producto.nombre}</h2>
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className={styles.imagen}
      />
      <p className={`${styles.tipo} ${styles['tipo' + tipo]}`}>{producto.tipo}</p>
      <p className={`${styles.region} ${styles['region' + tipo]}`}>{producto.region}</p>
      <p className={`${styles.precio} ${styles['precio' + tipo]}`}>Precio: ${producto.precio}</p>
      <Link
        to={`/product/${producto.id}`}
        className={`${styles.botonDetalle} ${styles['boton' + tipo]}`}
      >
        Ver detalle
      </Link>
      <button
        className={`${styles.botonDetalle} ${styles['boton' + tipo]} ${showMsg ? styles.botonAgregado : ''}`}
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