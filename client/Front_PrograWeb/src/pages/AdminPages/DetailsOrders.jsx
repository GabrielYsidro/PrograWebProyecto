import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TopBar from "../../components/TopBarAdmin/TopBarAdmin.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import styles from '../../styles/DetailsOrders.module.css';
import stylesRef from '../../styles/DetailsUser.module.css';
import OrderStatusTracker from "../../components/OrderTracker/OrderTracker.jsx";
import { useOrdenContext } from "../../hooks/OrdenContext.jsx";
import { getProductsByOrder } from '../../services/orderService.js';

const DetailsOrders = () => {
  const { ordenItems, removeItem } = useOrdenContext();
  const { id } = useParams();
  const navigate = useNavigate();
  const [orderProducts, setOrderProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const orden = ordenItems.find((o) => o.id === id);

  useEffect(() => {
    if (!orden) return;

    const fetchOrderItems = async () => {
      try {
        const productos = await getProductsByOrder(orden.id);
        setOrderProducts(productos);
      } catch (error) {
        console.error("Error al cargar productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderItems();
  }, [orden]);

  const handleCancel = () => {
    removeItem(orden.id);
    navigate("/listOrders");
  };

  if (!orden) return <><p>Orden no encontrada.</p></>;

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
              <p><strong>Fecha de registro:</strong> {orden.date}</p>
              <p><strong>Dirección:</strong> {orden.direccionEnvio}</p>
            </div>
            <div>
              <p><strong>Estado:</strong> {orden.status}</p>
              <p><strong>Usuario:</strong> {orden.customer}</p>
              <p><strong>Método de pago:</strong> {orden.metodoPago}</p>
              <p><strong>Total:</strong> ${orden.total}</p>
            </div>
          </div>

          <OrderStatusTracker estado={orden.status} />

          {loading ? (
            <p>Cargando productos...</p>
          ) : (
            <table className={stylesRef["tabla-ordenes"]}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Categoría</th>
                  <th>Precio Unitario</th>
                  <th>Cantidad</th>
                  <th>Precio Total</th>
                </tr>
              </thead>
              <tbody>
                {orderProducts && orderProducts.length > 0 ? (
                  orderProducts.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.nombre}</td>
                      <td>{item.categoria}</td>
                      <td>${item.precioUnitario}</td>
                      <td>{item.cantidad}</td>
                      <td>${item.precioTotal}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6">No hay productos en esta orden.</td>
                  </tr>
                )}
              </tbody>
            </table>
          )}

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
