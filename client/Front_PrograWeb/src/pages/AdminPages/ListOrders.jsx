import { usuarios } from "../../data/usuarios";
import { useState } from "react";

export const ListaOrdenes = () =>{
    const ordenesTotales = usuarios.flatMap(u =>
        u.ordenes.map(o => ({ ...o, usuario: u.nombre }))
    );
    const [filtro, setFiltro] = useState("");

    const filtradas = ordenesTotales.filter(o =>
        o.usuario.toLowerCase().includes(filtro.toLowerCase()) ||
        o.id.toString().includes(filtro)
    );

    return (
        <div className="container-listaordenes">
            <h2>Listado de Órdenes</h2>
            <input
                className="filterbox"
                placeholder="Filtrar por nombre, apellido o ID"
                value={filtro}
                onChange={(e) => setFiltro(e.target.value)}
            />
            <ul>
                {filtradas.map(o => (
                    <li key={o.id} className="listaOrdenes">
                        Orden #{o.id} - {o.fecha} - {o.total} - {o.estado} - Cliente: {o.usuario} -
                        <a href={`/ordenes/${o.id}`} className="gotodetails">Ver detalle</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
