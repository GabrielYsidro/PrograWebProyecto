import React, { useState } from 'react';
import { useProductos } from '../../hooks/ProductosContext.jsx';

const BusquedaProducto = ({ onBusqueda }) => {
  const { productos } = useProductos();
  const [busqueda, setBusqueda] = useState('');

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    if (onBusqueda) {
      onBusqueda(e.target.value, productos);
    }
  };

  return (
    <form onSubmit={e => e.preventDefault()} style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        placeholder="Filtrar por nombre o ID"
        value={busqueda}
        onChange={handleChange}
        style={{ padding: '0.5rem', marginRight: '0.5rem' }}
      />
    </form>
  );
};

export default BusquedaProducto;