import { useParams, Link } from 'react-router-dom';
import styles from './DetalleProducto.module.css';
import { productos } from '../../constants/Consts.jsx';
import ScrollToTop from '../ScrollTop/ScrollTop.jsx';

function DetalleProducto() {
  const { id } = useParams();
  const producto = productos.find(p => String(p.id) === id);

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
              <p className={styles.tipo}><strong>Tipo:</strong> {producto.tipo}</p>
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
              {producto.evoluciones && (
                <div className={styles.evoluciones}>
                  <strong>Evoluciones:</strong>
                  {producto.evoluciones.length > 0 ? (
                    <ul>
                      {producto.evoluciones.map((evo, idx) => (
                        <li key={idx} className={styles.evolucionItem}>
                          {evo.imagen && (
                            <img src={evo.imagen} alt={evo.nombre} className={styles.evoImagen} />
                          )}
                          <span className={styles.evoNombre}>{evo.nombre}</span>
                          {evo.nivel && <span className={styles.evoNivel}> (Nivel {evo.nivel})</span>}
                          {evo.metodo && <span className={styles.evoMetodo}> ({evo.metodo})</span>}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <span>Este Pokémon no tiene evoluciones.</span>
                  )}
                </div>
              )}
              <Link to="/" className={styles.volverBtn}>Volver al inicio</Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default DetalleProducto;