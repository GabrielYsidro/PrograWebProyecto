
import styles from '../../styles/ListOrders.module.css';


export const TablaAdmin = ({ setFiltro , filtro, item, Card , headers , paginados , desactivarUsuario, activarUsuario }) => {
    
 //   const { usuarios , activarUsuario , desactivarUsuario } = useUserContext();

    

    return (
        <>
            <input
                className="filterbox"
                placeholder="Filtrar por nombre, apellido o ID"
                value={filtro}
                onChange={(e) => setFiltro(e.target.value)}
            />
            <h1 className={styles['titulo']}>Listado de {item}</h1>
            <table className={styles["userTable"]}>
                <thead>
                    <tr>
                        {headers.map((header, idx) => (
                            <th key={idx}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {item === "órdenes"
                        ? paginados.map(o => (
                            <Card key={o.id} o={o} />
                        ))
                        : paginados.map(u => (
                            <Card key={u.id} u={u} desactivarUsuario={desactivarUsuario} activarUsuario={activarUsuario} />
                        ))
                    }
                </tbody>
            </table>
        </>
    ); 
}

export default TablaAdmin;