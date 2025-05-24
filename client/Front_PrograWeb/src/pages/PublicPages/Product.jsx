import { useParams } from 'react-router-dom';
import { productos } from '../../constants/Consts.jsx';
import styles from '../../styles/Home.module.css';

const tipoBorderColors = {
    Fuego: '#ff5252',
    Agua: '#2979ff',
    Planta: '#43a047'
};

export const Product = () => {
    const { id } = useParams();
    const producto = productos.find(p => p.id === Number(id));

    if (!producto) {
        return <div>Pokémon no encontrado.</div>;
    }

    return (
        <div
            className={
                producto.tipo === 'Fuego'
                    ? styles.cardFuego
                    : producto.tipo === 'Agua'
                    ? styles.cardAgua
                    : styles.cardPlanta
            }
            style={{
                maxWidth: 400,
                margin: '2rem auto',
                padding: '1.5rem',
                borderRadius: 16,
                boxShadow: '0 2px 16px #0002',
                borderColor: tipoBorderColors[producto.tipo],
                borderWidth: '2.5px',
                borderStyle: 'solid',
                background: undefined // El background ya lo da la clase
            }}
        >
            <h2
                className={
                    producto.tipo === 'Fuego'
                        ? styles.nombreFuego
                        : producto.tipo === 'Agua'
                        ? styles.nombreAgua
                        : styles.nombrePlanta
                }
                style={{ fontSize: '2rem', marginBottom: '1rem' }}
            >
                {producto.tipo === 'Fuego' && '🔥 '}
                {producto.tipo === 'Agua' && '💧 '}
                {producto.tipo === 'Planta' && '🌱 '}
                {producto.nombre}
                {producto.tipo === 'Fuego' && ' 🔥'}
                {producto.tipo === 'Agua' && ' 🌊'}
                {producto.tipo === 'Planta' && ' 🌸'}
            </h2>
            <img
                src={producto.imagen}
                alt={producto.nombre}
                style={{
                    width: '140px',
                    height: '140px',
                    objectFit: 'contain',
                    display: 'block',
                    margin: '0 auto 1rem auto'
                }}
            />
            <p
                className={styles.regionPoke}
                style={{
                    background: tipoBorderColors[producto.tipo],
                    borderColor: tipoBorderColors[producto.tipo]
                }}
            >
                Región: {producto.region}
            </p>
            <p
                className={styles.precioPoke}
                style={{
                    background: tipoBorderColors[producto.tipo],
                    borderColor: tipoBorderColors[producto.tipo]
                }}
            >
                Precio: S/ {producto.precio.toFixed(2)}
            </p>
        </div>
    );
};

export default Product;