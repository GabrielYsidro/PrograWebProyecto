import { useState } from "react";
import {usuarios as data} from '../../constants/Consts.jsx'
import { UserItem } from "../../components/UserItem/UserItem.jsx";
import TopBar from "../../components/TopBarAdmin/TopBarAdmin.jsx";
import styles from '../../styles/ListUsers.module.css'
import Footer from "../../components/Footer/Footer.jsx";
import { TablaAdmin } from "../../components/Tabla/TablaAdmin.jsx";
import { useUserContext } from "../../contexts/userContext.jsx";

export const ListUsers = () => {

    const { users , desactivarUsuario , activarUsuario } = useUserContext();

    const [filtro, setFiltro] = useState("");
    const [paginaActual, setPaginaActual] = useState(1);
    const porPagina = 6;
    

    const filtrados = users.filter(u =>
        u.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
        u.id.toString().includes(filtro)
    );
    const totalPaginas = Math.ceil(filtrados.length / porPagina);
    const desde = (paginaActual - 1) * porPagina;
    const hasta = desde + porPagina;
    const paginados = filtrados.slice(desde, hasta);

    return (
        <>
            <div className={styles['home-background']}></div>
            <div className={styles['home-content']}>
                <TopBar />
                <div className={styles['main-container']}>
                    
                    <TablaAdmin setFiltro={setFiltro}
                        filtro={filtro}
                        item="usuarios registrados"
                        Card={UserItem}
                        headers={["ID", "Nombre", "Email", "Estado", "Acciones"]} 
                        paginados = {paginados} 
                        desactivarUsuario ={desactivarUsuario} 
                        activarUsuario={activarUsuario} />

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
                <Footer />
            </div>
        </>
        
    );
}

export default ListUsers;   