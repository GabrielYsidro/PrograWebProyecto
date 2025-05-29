import { productos } from '../../constants/Consts.jsx';
import Producto from '../Producto/Producto.jsx';
import styles from '../../styles/Home.module.css';
const NewPokemons = () => {
  const nuevos = productos.filter(p => p.id >= 19 && p.id <= 24);

  return (
    <section>
      <h2 className={styles.elige}>
        ¡Nuevos Pokémon!
      </h2>
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