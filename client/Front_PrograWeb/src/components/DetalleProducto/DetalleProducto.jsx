import { useParams, Link } from 'react-router-dom';
import styles from './DetalleProducto.module.css';
import ScrollToTop from '../ScrollTop/ScrollTop.jsx';
import { useCartContext } from '../../contexts/CartContext.jsx';
import { useState } from 'react';
import { useProductoDetalle } from '../../hooks/useProductoDetalle.jsx';

function DetalleProducto({ modoAdmin = false, onModificar }) {
  const { id } = useParams();
  const { producto, loading, error } = useProductoDetalle(id); 
  const { addItem } = useCartContext ? useCartContext() : { addItem: () => {} };
  const [showMsg, setShowMsg] = useState(false);

  if (loading) return <div>Cargando detalle del producto...</div>;
  if (error || !producto) return <div>Producto no encontrado.</div>;


  const handleAdd = () => {
    addItem(producto);
    setShowMsg(true);
    setTimeout(() => {
      setShowMsg(false);
    }, 1000);
  };

  return (
    <>
      <ScrollToTop />
      <div className={styles.detalleFondo}>
        <div className={styles.detalleProductoWrapper}>
          {!producto ? (
            <div className={styles.noEncontrado}>Producto no encontrado.</div>
          ) : (
            <div className={styles.detalleProducto}>
              <h2 className={styles.nombre}>{producto.nombre}</h2>
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className={styles.imagen}
              />
              <p className={styles.categoria}><strong>Categoría:</strong> {producto.categoria}</p>
              <p className={styles.region}><strong>Región:</strong> {producto.region}</p>
              <p className={styles.precio}><strong>Precio:</strong> ${producto.precio}</p>
              {producto.stock !== undefined && (
                <p className={styles.stock}><strong>Stock:</strong> {producto.stock}</p>
              )}
              {producto.rareza && (
                <p className={styles.rareza}><strong>Rareza:</strong> {producto.rareza}</p>
              )}
              {producto.descripcion && (
                <p className={styles.descripcion}><strong>Descripción:</strong> {producto.descripcion}</p>
              )}
              {modoAdmin ? (
                <div>
                  <button
                    className={styles.botonDetalle}
                    type="button"
                    onClick={() => onModificar && onModificar(producto)}
                  >
                    Modificar producto
                  </button>
                  <Link to="/homeadmin" className={styles.volverBtn}>Volver al inicio</Link>
                </div>
              ) : (
                <div>
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
                  <Link to="/" className={styles.volverBtn}>Volver al inicio</Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default DetalleProducto;