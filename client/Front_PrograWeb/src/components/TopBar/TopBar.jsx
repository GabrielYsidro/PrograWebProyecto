import { Link } from 'react-router-dom';
import styles from '../../styles/TopBar.module.css';

const gifLinks = [
  { to: '/', label: 'Inicio', gif: 'https://play.pokemonshowdown.com/sprites/ani/pikachu.gif' },
  { to: '/results', label: 'Resultados', gif: 'https://play.pokemonshowdown.com/sprites/ani/alakazam.gif' },
  { to: '/product/1', label: 'Producto', gif: 'https://play.pokemonshowdown.com/sprites/ani/chansey.gif' }, 
  { to: '/carrito', label: 'Carrito', gif: 'https://play.pokemonshowdown.com/sprites/ani/snorlax.gif' },
  { to: '/checkout', label: 'Checkout', gif: 'https://play.pokemonshowdown.com/sprites/ani/meowth.gif' },
  { to: '/greeting', label: 'Greeting', gif: 'https://play.pokemonshowdown.com/sprites/ani/jigglypuff.gif' },
  { to: '/login', label: 'Login', gif: 'https://play.pokemonshowdown.com/sprites/ani/gengar.gif' },
  { to: '/register', label: 'Registro', gif: 'https://play.pokemonshowdown.com/sprites/ani/eevee.gif' },
  { to: '/user/1', label: 'Usuario', gif: 'https://media.giphy.com/media/DRfu7BT8ZK1uo/giphy.gif' } 
];

const TopBar = ({ handleSearch, busqueda, setBusqueda }) => (
  <nav className={styles.topbar}>
    <div className={styles.linksContainer}>
      {gifLinks.map(({ to, label, gif }) => (
        <Link key={to} to={to} className={styles.link}>
          <img src={gif} alt={label} className={styles.linkGif}/>
          {label}
        </Link>
      ))}
      {/* Barra de búsqueda */}
      <form onSubmit={handleSearch} className={styles.searchForm}>
        <input
          type="text"
          placeholder="Buscar productos..."
          value={busqueda}
          onChange={e => setBusqueda(e.target.value)}
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>
          Buscar
        </button>
      </form>
    </div>
  </nav>
);

export default TopBar;