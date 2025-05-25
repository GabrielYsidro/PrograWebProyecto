import { useParams } from 'react-router-dom';
import { productos } from '../../constants/Consts.jsx';
import Producto from '../../components/Producto/Producto.jsx';


export const Product = () => {
    const { id } = useParams();
    const producto = productos.find(p => p.id === Number(id));

    if (!producto) {
        return <div>Pokémon no encontrado.</div>;
    }

    return (
        <div>
            <Producto producto={producto} />

        </div>
    );
};

export default Product;