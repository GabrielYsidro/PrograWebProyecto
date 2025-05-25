import { Link } from 'react-router-dom';
import styles from './Producto.module.css';

function Producto({ producto }) {
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
    </div>
  );
}

export default Producto;