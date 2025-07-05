import React from 'react';
import styles from './TableAdmin.module.css';

const TablaProductos = ({ productos, onDetalle, onToggleActivo, styles }) => (
  <table className={styles['tableProduct']}>
    <thead>
      <tr>
        <th className={styles['tituloTabla']}>ID</th>
        <th className={styles['tituloTabla']}>Nombre</th>
        <th className={styles['tituloTabla']}>Categoría</th>
        <th className={styles['tituloTabla']}>Región</th>
        <th className={styles['tituloTabla']}>Precio</th>
        <th className={styles['tituloTabla']}>Stock</th>
        <th className={styles['tituloTabla']}>Imagen</th>
        <th className={styles['tituloTabla']}>Rareza</th>
        <th className={styles['tituloTabla']}>Acciones</th>
      </tr>
    </thead>
    <tbody>
      {productos.length === 0 ? (
        <tr>
          <td colSpan="7" style={{ textAlign: 'center', padding: '1rem' }}>No hay productos</td>
        </tr>
      ) : (
        productos.map(product => (
          <tr key={product.id}>
            <td className={styles['ValorTabla']}>{product.id}</td>
            <td className={styles['ValorTabla']}>{product.nombre}</td>
            <td className={styles['ValorTabla']}>{product.categoria}</td>
            <td className={styles['ValorTabla']}>{product.region}</td>
            <td className={styles['ValorTabla']}>${product.precio}</td>
            <td className={styles['ValorTabla']}>{product.stock}</td>
            <td className={styles['ValorTabla']}>
              <img className={styles['imagenProducto']} src={product.imagen} alt={product.nombre} />
            </td>
            <td className={styles['ValorTabla']}>{product.rareza}</td>
            <td className={styles['ValorTabla']}>
              <div className={styles['accionesColumna']}>
                <button onClick={() => onDetalle(product.id)}>
                Ver Detalle
                </button>
                <button onClick={() => onToggleActivo(product.id)}>
                {product.activo ? 'Desactivar' : 'Activar'}
                </button>
            </div>
            </td>
          </tr>
        ))
      )}
    </tbody>
  </table>
);

export default TablaProductos;