import { usuarios } from '../../constants/Consts.jsx';
import { useState } from "react";
import { OrderItem } from "../../components/OrderItem/OrderItem.jsx";
import TopBar from "../../components/TopBarAdmin/TopBarAdmin.jsx";
import styles from '../../styles/ListOrders.module.css';
import Footer from "../../components/Footer/Footer.jsx";
import {useOrdenContext} from "../../hooks/OrdenContext.jsx";

export const ListOrders = () =>{

    const { ordenItems, removeItem } = useOrdenContext();
    // Combina las órdenes de todos los usuarios en un solo array  

    const ordenesTotales = ordenItems.flatMap(u =>
        u.map(o => ({ ...o, cliente: u.nombre }))
    );
    const [filtro, setFiltro] = useState("");
    
    const [paginaActual, setPaginaActual] = useState(1);
    const porPagina = 6;

    const filtradas = ordenesTotales.filter(o =>
        o.usuario.toLowerCase().includes(filtro.toLowerCase()) ||
        o.id.toString().includes(filtro)
    );
    const totalPaginas = Math.ceil(filtradas.length / porPagina);
    const desde = (paginaActual - 1) * porPagina;
    const hasta = desde + porPagina;
    const paginados = filtradas.slice(desde, hasta);

    return (
        <>  
            <div className={styles['home-background']}></div>
            <div className={styles['home-content']}>
                    <TopBar/>
                <div className={styles['main-container']}>
                    
                    <input
                        className="filterbox"
                        placeholder="Filtrar por nombre, apellido o ID"
                        value={filtro}
                        onChange={(e) => setFiltro(e.target.value)}
                    />
                    <h1 className={styles['titulo']}>Listado de Órdenes</h1>

                    <table className={styles["userTable"]}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Fecha</th>
                                <th>Monto total</th>
                                <th>Estado</th>
                                <th>Cliente</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginados.map(o => (
                                <OrderItem key={o.id} o={o}/>
                            ))}
                        </tbody>
                    </table>
                    <div className={styles["pagination"]}>
                        {Array.from({ length: totalPaginas }, (_, i) => (
                            <button
                                key={i + 1}
                                onClick={() => setPaginaActual(i + 1)}
                                className={paginaActual === i + 1 ? styles['active-page'] : ""}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>
                </div>
                <br />
                <Footer/>
            </div>
        </>
    );
}

export default ListOrders;
