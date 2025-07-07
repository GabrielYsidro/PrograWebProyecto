
import { useState } from "react";
import { OrderItem } from "../../components/OrderItem/OrderItem.jsx";
import TopBar from "../../components/TopBarAdmin/TopBarAdmin.jsx";
import styles from '../../styles/ListOrders.module.css';
import Footer from "../../components/Footer/Footer.jsx";
import {useOrdenContext} from "../../hooks/OrdenContext.jsx";
import { TablaAdmin } from "../../components/Tabla/TablaAdmin.jsx";



export const ListOrders = () =>{

    const { ordenItems } = useOrdenContext();
    // Combina las órdenes de todos los usuarios en un solo array  
    const ordenesTotales = ordenItems;
    const [filtro, setFiltro] = useState("");
    const [paginaActual, setPaginaActual] = useState(1);
    const porPagina = 6;
    const filtradas = ordenesTotales.filter(o =>
    o.customer.toLowerCase().includes(filtro.toLowerCase()) ||
    o.id.toString().includes(filtro)
    ).sort((a, b) => a.id - b.id);
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
                    <TablaAdmin setFiltro={setFiltro}
                        filtro={filtro}
                        item="órdenes"
                        Card={OrderItem}
                        headers={["ID", "Fecha", "Monto Total", "Estado", "Cliente", "Acciones"]} paginados = {paginados}/>
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
