import { Link } from "react-router-dom";
import styles from './UserItem.module.css';


export const UserItem = ({ u , desactivarUsuario , activarUsuario }) => {
        

    return (
        <tr className={styles["userRow"]}>
            <td>{u.id}</td>
            <td>{u.name}</td>
            <td>{u.email}</td>
            <td>{u.active ? "Activo" : "Inactivo"}</td>
            <td>
                <div className={styles["buttons"]}>
                    <Link to={`/usuarios/${u.id}`}>
                        <button className={styles["btnDetalle"]}>Ver Detalle</button>
                    </Link>
                    {u.activo ? (
                        <button
                            onClick={() => desactivarUsuario(u.id)}
                            className={styles["btnDesactivar"]}
                        >
                            Desactivar
                        </button>
                    ) : (
                        <button
                            onClick={() => activarUsuario(u.id)}
                            className={styles["btnActivar"]}
                        >
                            Activar
                        </button>
                    )}
                </div>
            </td>
        </tr>
  );
}
export default UserItem;
                        