import { useState } from "react";
import {usuarios as data} from '../../constants/Consts.jsx'
import { UserItem } from "../../components/UserItem/UserItem.jsx";
import TopBar from "../../components/TopBarAdmin/TopBarAdmin.jsx";
import styles from '../../styles/ListUsers.module.css'
import Footer from "../../components/Footer/Footer.jsx";

export const ListUsers = () => {
    
    const [usuarios, setUsuarios] = useState(data);
    const [filtro, setFiltro] = useState("");
    const [paginaActual, setPaginaActual] = useState(1);
    const porPagina = 6;
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

    const filtrados = usuarios.filter(u =>
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
                    
                    <input
                        className={styles["filterbox"]}
                        placeholder="Filtrar por ID o nombre"
                        value={filtro}
                        onChange={(e) => {
                            setFiltro(e.target.value);
                            setPaginaActual(1);
                        }}
                    />
                    <h1 className={styles["titulo"]}>Usuarios Registrados</h1>
                    <table className={styles["userTable"]}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginados.map(u => (
                                <UserItem key={u.id} u={u} desactivarUsuario={desactivarUsuario} activarUsuario={activarUsuario} />
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
                <Footer />
            </div>
        </>
        
    );
}

export default ListUsers;   