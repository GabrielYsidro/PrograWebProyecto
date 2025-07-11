import { useProductos } from '../../hooks/ProductosContext.jsx'; // 🔥 Usar contexto real
import Producto from '../Producto/Producto.jsx';
import styles from '../../styles/Home.module.css';

const NewPokemons = () => {
  const { productos } = useProductos(); // 🔥 Obtener de la API real
  
  // Filtrar activos y tomar los últimos 6
  const nuevos = productos
    .filter(p => p.activo === true)  // Solo activos
    .sort((a, b) => parseInt(b.id) - parseInt(a.id)) // Ordenar por ID descendente (mayor a menor)
    .slice(0, 6); // Tomar los primeros 6 (los de mayor ID)

  console.log(' NewPokemons usando API:', nuevos.length, 'pokémones');

  return (
    <section>
      <h2 className={styles.elige}>¡Nuevos Pokémon!</h2>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        flexWrap: 'wrap'
      }}>
        {nuevos.map(producto => (
          <Producto key={producto.id} producto={producto} />
        ))}
      </div>
    </section>
  );
};

export default NewPokemons;