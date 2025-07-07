import { useState, useEffect } from 'react';
import TopBarUser from '../../components/TopBarUser/TopBarUser.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import styles from '../../styles/HomeUser.module.css';
import { useUserContext } from '../../contexts/userContext';
import { useOrdenContext } from "../../hooks/OrdenContext.jsx";
import { useProductos } from '../../hooks/ProductosContext.jsx';

const HomeUser = () => {
  const [busqueda, setBusqueda] = useState('');
  const [busquedaActiva, setBusquedaActiva] = useState('');
  const [userOrders, setUserOrders] = useState([]);
  const { users, setUsers, currentUser } = useUserContext(); //Solo quiero el currentUser
  const { ordenes, getOrdersByUserId } = useOrdenContext();
  const { productos } = useProductos();
  
  // Obtener órdenes específicas del usuario actual
  useEffect(() => {
    const fetchUserOrders = async () => {
      if (currentUser?.id) {
        try {
          const orders = await getOrdersByUserId(currentUser.id);
          setUserOrders(orders);
        } catch (error) {
          console.error('Error al obtener órdenes del usuario:', error);
          setUserOrders([]);
        }
      }
    };

    fetchUserOrders();
  }, [currentUser?.id, getOrdersByUserId]);

  console.log("currentUser:", currentUser);
  console.log("userOrders:", userOrders);
  
  const ordersCount = userOrders.length;

  const handleSearch = (e) => {
    e.preventDefault();
    setBusquedaActiva(busqueda.trim().toLowerCase());
  };

  const productosFiltrados = productos
    ? productos.filter(
        (p) => !busquedaActiva || p.nombre.toLowerCase().includes(busquedaActiva)
      )
    : [];

  return (
    <>
      
      <div className={styles['home-content']}>
        <TopBarUser handleInicio={() => {}} />
        <main className={styles.main}>
          <div className={styles.infoSection}>
            <div className={styles.userCard}>
              <h2 className={styles.elige}>Hola {currentUser?.name || 'Usuario'} !</h2>
              <div className={styles.dataRow}>
                <section>
                  <h3>Datos personales</h3>
                  <p>Nombre: {currentUser?.name}</p>
                  <p>Correo: {currentUser?.email}</p>
                </section>
                <section>
                  <h3>Dirección de envío</h3>
                  <p>{currentUser?.address || 'Av. Sin Indicar 1234'}</p>
                  <p>Celular de contacto: {currentUser?.phone_number || '999999999'}</p>
                </section>
              </div>
              {/* Tabla de órdenes del usuario */}
              <h3 style={{marginTop: '2rem', color: '#3B4CCA'}}>Órdenes recientes</h3>
              <table className={styles.ordersTable}>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Fecha</th>
                    <th>Total</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {userOrders.map(ord => (
                    <tr key={ord.id}>
                      <td>{ord.id}</td>
                      <td>{ord.date}</td>
                      <td>${Number(ord.total).toFixed(2)}</td>
                      <td>{ord.status}</td>
                      <td>
                        <button className={styles.detailButton} onClick={() => alert(`Detalle de la orden #${ord.id}`)}>
                          Ver detalle
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className={styles.statsSection}>
            <div className={styles.statBox}>
              <div className={styles.statLabel}>Órdenes</div>
              <div className={styles.statValue}>{ordersCount}</div>
            </div>
            <img
              src={currentUser?.fotoperfil || "https://randomuser.me/api/portraits/men/1.jpg"}
              alt="Foto de perfil"
              className={styles.profileImg}
            />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HomeUser;
