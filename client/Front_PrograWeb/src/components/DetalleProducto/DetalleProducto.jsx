import { useParams, Link } from 'react-router-dom';
import styles from './DetalleProducto.module.css';
import ScrollToTop from '../ScrollTop/ScrollTop.jsx';
import { useCartContext } from '../../contexts/CartContext.jsx';
import { useWishlistContext } from '../../hooks/WishlistContext.jsx'; // ← AGREGAR IMPORT
import { useState } from 'react';
import { useProductoDetalle } from '../../hooks/useProductoDetalle.jsx';

function DetalleProducto({ modoAdmin = false, onModificar }) {
  const { id } = useParams();
  const { producto, loading, error } = useProductoDetalle(id); 
  const { addItem } = useCartContext ? useCartContext() : { addItem: () => {} };
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlistContext(); // ← AGREGAR HOOK
  const [showMsg, setShowMsg] = useState(false);
  const [showWishlistMsg, setShowWishlistMsg] = useState(false); // ← AGREGAR STATE

  if (loading) return <div className={styles.loading}>Cargando detalle del producto...</div>;
  if (error || !producto) return <div className={styles.error}>Producto no encontrado.</div>;

  const handleAdd = () => {
    addItem(producto);
    setShowMsg(true);
    setTimeout(() => {
      setShowMsg(false);
    }, 1000);
  };

  // ← AGREGAR FUNCIÓN handleWishlist
  const handleWishlist = async () => {
    if (isInWishlist(producto.id)) {
      const success = await removeFromWishlist(producto.id);
      if (success) {
        setShowWishlistMsg('removed');
      }
    } else {
      const success = await addToWishlist(producto);
      if (success) {
        setShowWishlistMsg('added');
      }
    }
    
    setTimeout(() => {
      setShowWishlistMsg(false);
    }, 1500);
  };

  const inWishlist = isInWishlist(producto.id); // ← AGREGAR VARIABLE

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
                <div className={styles.adminButtons}>
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
                <div className={styles.botonesContainer}>
                  <button
                    className={`${styles.botonDetalle} ${showMsg ? styles.botonAgregado : ''}`}
                    type="button"
                    onClick={handleAdd}
                    disabled={showMsg}
                  >
                    {showMsg ? (
                      <span className={styles.checkAnimado}>✔ Agregado al carrito</span>
                    ) : (
                      'Agregar al carrito'
                    )}
                  </button>
                  
                  {/* ← AGREGAR BOTÓN WISHLIST */}
                  <button
                    className={`${styles.botonWishlist} ${inWishlist ? styles.botonEnWishlist : ''} ${showWishlistMsg ? styles.botonWishlistAnimado : ''}`}
                    type="button"
                    onClick={handleWishlist}
                    disabled={showWishlistMsg}
                  >
                    {showWishlistMsg === 'added' ? (
                      <span className={styles.checkAnimado}>💖 Agregado a favoritos</span>
                    ) : showWishlistMsg === 'removed' ? (
                      <span className={styles.checkAnimado}>💔 Eliminado de favoritos</span>
                    ) : inWishlist ? (
                      '💖 En favoritos'
                    ) : (
                      '🤍 Agregar a favoritos'
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