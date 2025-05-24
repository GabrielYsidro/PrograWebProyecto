import { useState } from "react";
import {usuarios as data} from '../../constants/Consts.jsx'
import { Link } from "react-router-dom";

export const ListaUsuarios = () => {
    
    const [usuarios, setUsuarios] = useState(data);
    const [filtro, setFiltro] = useState("");

    const desactivarUsuario = (id) => {
        const actualizados = usuarios.map(u =>
            u.id === id ? { ...u, activo: false } : u
        );
        setUsuarios(actualizados);
    };

    const filtrados = usuarios.filter(u =>
        u.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
        u.id.toString().includes(filtro)
    );

    return (
        <div className="listaUsuarios">
            <h2>Usuarios Registrados</h2>
            <input
                className="filterbox"
                placeholder="Filtrar por ID o nombre"
                value={filtro}
                onChange={(e) => setFiltro(e.target.value)}
            />
            <ul>
                {filtrados.map(u => (
                    <li key={u.id} className="listaItem">
                        <div className="listaItemContent">
                            <div>
                                <strong>{u.nombre}</strong> - {u.email} ({u.activo ? "Activo" : "Inactivo"})
                            </div>
                            <div>
                                <button
                                    onClick={() => desactivarUsuario(u.id)}
                                    className="disabled button"
                                    disabled={!u.activo}
                                >Desactivar</button>
                                <Link to={`/usuarios/${u.id}`} className="linktodetails">Detalle</Link>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaUsuarios;   