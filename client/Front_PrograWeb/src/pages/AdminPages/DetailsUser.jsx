import { useParams } from "react-router-dom";
import { usuarios } from '../../constants/Consts.jsx';
import Footer from "../../components/Footer/Footer.jsx";
import TopBar from "../../components/TopBarAdmin/TopBarAdmin.jsx";
import styles from '../../styles/DetailsUser.module.css';
export const DetailsUser = () => {
    const { id } = useParams();
    const usuario = usuarios.find(u => u.id === parseInt(id));

    if (!usuario) return <div>Usuario no encontrado</div>;

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
                    {(usuario.ordenes || []).slice(0, 10).map((orden) => (
                        <tr key={orden.id}>
                        <td>{orden.id}</td>
                        <td>{orden.total}</td>
                        <td>{orden.fecha}</td>
                        <td>{orden.estado}</td>
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