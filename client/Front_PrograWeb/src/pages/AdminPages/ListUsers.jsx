import { useState } from "react";
import {usuarios as data} from '../../constants/Consts.jsx'
import { UserItem } from "../../components/UserItem/UserItem.jsx";
import TopBar from "../../components/TopBarAdmin/TopBarAdmin.jsx";
import styles from '../../styles/ListUsers.module.css'
import Footer from "../../components/Footer/Footer.jsx";
import { TablaAdmin } from "../../components/Tabla/TablaAdmin.jsx";


export const ListUsers = () => {
    
    const [usuarios, setUsuarios] = useState(data);
    const [filtro, setFiltro] = useState("");
    const [paginaActual, setPaginaActual] = useState(1);
    const porPagina = 6;
    

    const filtrados = usuarios.filter(u =>
        u.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
        u.id.toString().includes(filtro)
    );
    const totalPaginas = Math.ceil(filtrados.length / porPagina);
    const desde = (paginaActual - 1) * porPagina;
    const hasta = desde + porPagina;
    const paginados = filtrados.slice(desde, hasta);

    const desactivarUsuario = (id) => {
            const actualizados = usuarios.map(u =>
                u.id === id ? { ...u, activo: false } : u
            );
            setUsuarios(actualizados);
        };
    
    const activarUsuario = (id) => {
        const actualizados = usuarios.map(u =>
            u.id === id ? { ...u, activo: true } : u
    );
    setUsuarios(actualizados);
    };


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