import React from 'react';

const FormularioFechas = ({
  fechaInicio,
  fechaFin,
  onFechaInicioChange,
  onFechaFinChange,
  onAnalizar
}) => (
  <form>
    <label htmlFor="DiaA">Fecha a analizar:</label>
    <input
      type="date"
      name="DiaA"
      id="DiaA"
      value={fechaInicio}
      onChange={e => onFechaInicioChange(e.target.value)}
    />
    <br /><br />
    <label htmlFor="DiaD">Fecha final:</label>
    <input
      type="date"
      name="DiaD"
      id="DiaD"
      value={fechaFin}
      onChange={e => onFechaFinChange(e.target.value)}
    />
    <br /><br />
    <button type="button" onClick={onAnalizar}>Analizar</button>
  </form>
);

export default FormularioFechas;