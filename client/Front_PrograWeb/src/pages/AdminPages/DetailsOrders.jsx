import React from "react";
import { useParams } from "react-router-dom";
import TopBar from "../../components/TopBarAdmin/TopBarAdmin.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import styles from '../../styles/DetailsOrders.module.css';
import OrderStatusTracker from "../../components/OrderTracker/OrderTracker.jsx";
import { useOrdenContext } from "../../hooks/OrdenContext.jsx";
import { useNavigate } from "react-router-dom";


const DetailsOrders = () => {

  const { ordenItems, removeItem } = useOrdenContext();

  
  const { id } = useParams();
  const orden = ordenItems.find((o) => o.id === parseInt(id));
  
  const navigate = useNavigate();


  const handleCancel = () => {
    removeItem(orden.id);
    navigate("/listOrders");
  };
  
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
              <p><strong>Fecha de registro:</strong> {orden.registrationDate}</p>
              <p><strong>Fecha de cambio de estado:</strong> {orden.date}</p>
            </div>
            <div>
              <p><strong>Estado:</strong> {orden.status}</p>
              <p><strong>Usuario:</strong> {orden.customer}</p>
            </div>
          </div>

          <OrderStatusTracker estado={orden.status} />

          <button className={styles["cancelar-button"]} onClick={handleCancel}>
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
