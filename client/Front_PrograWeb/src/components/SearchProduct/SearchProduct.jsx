import React, { useState } from 'react';
import { useProductosApi } from '../../hooks/useProductApi.jsx'; // Asegúrate de que este hook esté correctamente implementado

const BusquedaProducto = ({ onBusqueda, productos }) => {
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