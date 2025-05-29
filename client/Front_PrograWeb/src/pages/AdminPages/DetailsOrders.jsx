import React from "react";
import { useParams } from "react-router-dom";
import { usuarios } from '../../constants/Consts.jsx';
import TopBar from "../../components/TopBarAdmin/TopBarAdmin.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import styles from '../../styles/DetailsOrders.module.css';
import OrderStatusTracker from "../../components/OrderTracker/OrderTracker.jsx";

const DetailsOrders = () => {
  const { id } = useParams();
  const orden = usuarios
    .flatMap((u) => u.ordenes.map((o) => ({ ...o, usuario: u })))
    .find((o) => o.id === parseInt(id));

  if (!orden) return <p>Orden no encontrada.</p>;

  return (
    <>
      <div className={styles['home-background']}></div>
      <div className={styles['home-content']}>
        <TopBar />
        <div className= {styles["order-details-container"]}>
          <h1>Detalle de la Orden</h1>

          <div className={styles["order-info"]}>
            <div>
              <p><strong>ID:</strong> #{orden.id}</p>
              <p><strong>Descripción:</strong> {orden.descripcion}</p>
              <p><strong>Fecha:</strong> {orden.fecha}</p>
            </div>
            <div>
              <p><strong>Estado:</strong> {orden.estado}</p>
              <p><strong>Usuario:</strong> {orden.usuario.nombre}</p>
              <p><strong>Email:</strong> {orden.usuario.email}</p>
            </div>
          </div>

          <OrderStatusTracker estado={orden.estado} />

          <button className={styles["cancelar-button"]}>
            Cancelar Orden
          </button>
        </div>
        <br />
        <Footer />
      </div>
    </>
  );
};

export default DetailsOrders;
