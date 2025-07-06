import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer.jsx";
import TopBar from "../../components/TopBarAdmin/TopBarAdmin.jsx";
import styles from '../../styles/DetailsUser.module.css';
import { useUserContext } from "../../contexts/userContext.jsx";
import { useOrdenContext } from "../../hooks/OrdenContext.jsx";


export const DetailsUser = () => {
    const { id } = useParams();
    const { users } = useUserContext();

    const usuario = users.find(u => u.id === parseInt(id));

    if (!usuario) return <div>Usuario no encontrado</div>;

    // Importa el contexto de órdenes

    // Dentro del componente
    const { ordenItems } = useOrdenContext();
    // Filtra las órdenes cuyo nombreCliente coincide con el usuario actual
    const ordenesUsuario = ordenItems.filter(
        (orden) => orden.customer === usuario.name
    );
    console.log(ordenesUsuario);
    return (
        <>
            <div className={styles['home-background']}></div>
            <div className={styles['home-content']}>
                <TopBar />
                
                <div className={styles['user-detail-container']}>
                <img
                    src={usuario.fotoPerfil}
                    alt="Foto de perfil"
                    className={styles['profile-pic']}
                />
                <div className={styles['user-info']}>
                    <div><strong>Nombre:</strong> {usuario.nombre}</div>
                    <div><strong>Email:</strong> {usuario.email}</div>
                    <div><strong>Dirección:</strong> {usuario.direccion}</div>
                    <div><strong>Teléfono:</strong> {usuario.telefono}</div>
                    <div><strong>Rol:</strong> {usuario.rol}</div>
                    <div><strong>Estado:</strong> {usuario.activo ? "Activo" : "Inactivo"}</div>
                </div>

                <h2 className={styles['ordenes-title']}>Órdenes del Usuario</h2>
                <table className={styles['tabla-ordenes']}>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Monto Total</th>
                        <th>Fecha</th>
                        <th>Estado</th>
                    </tr>
                    </thead>
                    <tbody>
                    {ordenesUsuario.slice(0, 10).map((orden) => (
                        <tr key={orden.id}>
                        <td>{orden.id}</td>
                        <td>{orden.total}</td>
                        <td>{orden.date}</td>
                        <td>{orden.status}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
                <br />
                <Footer />
                
            </div>
        </>
    );
}

export default DetailsUser;