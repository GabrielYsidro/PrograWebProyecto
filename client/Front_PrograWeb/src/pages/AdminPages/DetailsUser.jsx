import { useParams } from "react-router-dom";
import { usuarios } from "../../data/usuarios";

export const DetalleUsuario = () => {
    const { id } = useParams();
    const usuario = usuarios.find(u => u.id === parseInt(id));

    if (!usuario) return <div>Usuario no encontrado</div>;

    return (
        <div className="detailsUsuario">
            <h2 >Detalle del Usuario</h2>
            <p><strong>Nombre:</strong> {usuario.nombre}</p>
            <p><strong>Email:</strong> {usuario.email}</p>
            <p><strong>Dirección:</strong> {usuario.direccion}</p>
            <p><strong>Teléfono:</strong> {usuario.telefono}</p>
            <p><strong>Rol:</strong> {usuario.rol}</p>

            <h3>Órdenes</h3>
            <ul className="listaOrdenes">
               {usuario.ordenes.slice(0, 10).map(o => (
                    <li key={o.id}>Orden #{o.id} - {o.fecha} - {o.total} - {o.estado}</li>
                ))}
          </ul>
        </div>
    );
}
   