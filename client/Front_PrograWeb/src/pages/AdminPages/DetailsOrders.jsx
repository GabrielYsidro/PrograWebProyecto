import React from "react";
import { useParams } from "react-router-dom";
import { usuarios } from "../../data/usuarios";

export const OrdenDetalle = () => {
  const { id } = useParams();
  const orden = usuarios
    .flatMap((u) => u.ordenes.map((o) => ({ ...o, usuario: u })))
    .find((o) => o.id === parseInt(id));

  if (!orden) return <p>Orden no encontrada.</p>;

  return (
    <div className="container-orden-detalle">
      <h1>Detalle de la Orden</h1>
      <p><strong>ID:</strong> #{orden.id}</p>
      <p><strong>Descripción:</strong> {orden.descripcion}</p>
      <p><strong>Fecha:</strong> {orden.fecha}</p>
      <p><strong>Estado:</strong> {orden.estado}</p>
      <p><strong>Usuario:</strong> {orden.usuario.nombre}</p>
      <button className="cancelar-button">
        Cancelar Orden
      </button>
    </div>
  );
};