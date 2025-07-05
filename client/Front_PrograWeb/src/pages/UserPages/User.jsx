import React, { useState, useEffect } from 'react';
import styles from '../../components/ChangeTable/ChangeTable.module.css';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../contexts/userContext.jsx';
import { useOrdenContext } from '../../hooks/OrdenContext.jsx';

export function User() {
  const navigate = useNavigate();
  const { currentUser } = useUserContext();
  const { ordenItems } = useOrdenContext();
  const [userOrders, setUserOrders] = useState([]);

  useEffect(() => {
    if (currentUser) {
      const filteredOrders = ordenItems.filter(
        (order) => order.customer === currentUser.email
      );
      setUserOrders(filteredOrders);
    }
  }, [currentUser, ordenItems]);

  const handleBack = () => {
    navigate('/homeuser');
  };

  if (!currentUser) {
    navigate('/login');
    return null;
  }

  return (
    <div className={styles.userContainer}>
      <div className={styles.profileSection}>
        <img
          src={currentUser.fotoPerfil || '/icon-person.png'}
          alt="Perfil"
          className={styles.profilePicture}
        />
        <h2 className={styles.username}>{currentUser.nombre}</h2>
        <button onClick={handleBack} className={styles.backButton}>
          Volver al Inicio
        </button>
      </div>

      <div className={styles.ordersSection}>
        <h3 className={styles.ordersTitle}>Tus Pedidos</h3>
        {userOrders.length > 0 ? (
          <table className={styles.ordersTable}>
            <thead>
              <tr>
                <th>ID Pedido</th>
                <th>Fecha</th>
                <th>Total</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {userOrders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.date}</td>
                  <td>${order.total.toFixed(2)}</td>
                  <td>{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className={styles.noOrders}>No se encontraron pedidos.</p>
        )}
      </div>
    </div>
  );
}

export default User;