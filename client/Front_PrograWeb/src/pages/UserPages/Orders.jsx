import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import TopBar from "../../components/TopBarUser/TopBarUser.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import styles from '../../styles/Orders.module.css';
import OrderStatusTracker from "../../components/OrderTracker/OrderTracker.jsx";
import { useOrdenContext } from "../../hooks/OrdenContext.jsx";

const DetailsOrders = () => {
  const { ordenes } = useOrdenContext();
  const { id } = useParams();
  const orden = ordenes.find((o) => o.id === parseInt(id));
  const navigate = useNavigate();

  if (!orden) return <p>Orden no encontrada.</p>;

  return (
    <>
      <div className={styles['home-background']}></div>
      <div className={styles['home-content']}>
        <TopBar />
        <div className={styles["order-details-container"]}>
          <h1>Detalle de la Orden</h1>
          <div className={styles["order-info"]}>
            <div>
              <p><strong>ID:</strong> #{orden.id}</p>
              <p><strong>Fecha de registro:</strong> {orden.registrationDate}</p>
              <p><strong>Fecha de cambio de estado:</strong> {orden.date}</p>
            </div>
            <div>
              <p><strong>Estado:</strong> {orden.status}</p>
              <p><strong>Usuario:</strong> {orden.customer}</p>
            </div>
          </div>
          <OrderStatusTracker estado={orden.status} />
        </div>
        <br />

        <button className={styles['back-button']} onClick={() => navigate('/homeuser')}>
          Regresar a la lista de órdenes
        </button>
        <Footer />
      </div>
    </>
  );
};

export default DetailsOrders;
