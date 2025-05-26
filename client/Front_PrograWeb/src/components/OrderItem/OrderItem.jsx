
import styles from "./OrderItem.module.css";
import { Link } from "react-router-dom";

export const OrderItem = ({ o }) => {

    return (
        <tr className={styles["userRow"]}>
            <td>Orden #{o.id}</td>
            <td>{o.fecha}</td>
            <td>{o.total}</td>
            <td>{o.estado}</td>
            <td>{o.usuario}</td>
            <td>
                    <Link to={`/Order/${o.id}`}>
                        <button className={styles["btnDetalle"]}>Ver Detalle</button>
                    </Link>
            </td>
        </tr>
    );
}
export default OrderItem;




