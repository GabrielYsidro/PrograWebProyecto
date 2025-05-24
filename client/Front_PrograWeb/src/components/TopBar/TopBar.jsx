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
  <nav style={{ background: '#222', padding: '1rem', margin:'0.5%', borderRadius:'10px' }}>
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
      <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Inicio</Link>
      <Link to="/categorias" style={{ color: '#fff', textDecoration: 'none' }}>Categorias</Link>
      <Link to="/results" style={{ color: '#fff', textDecoration: 'none' }}>Resultados</Link>
      <Link to="/product/1" style={{ color: '#fff', textDecoration: 'none' }}>Producto</Link>
      <Link to="/carrito" style={{ color: '#fff', textDecoration: 'none' }}>Carrito</Link>
      <Link to="/checkout" style={{ color: '#fff', textDecoration: 'none' }}>Checkout</Link>
      <Link to="/greeting" style={{ color: '#fff', textDecoration: 'none' }}>Greeting</Link>
      <Link to="/login" style={{ color: '#fff', textDecoration: 'none' }}>Login</Link>
      <Link to="/register" style={{ color: '#fff', textDecoration: 'none' }}>Registro</Link>
      <Link to="/user/1" style={{ color: '#fff', textDecoration: 'none' }}>Usuario</Link>
      {/* Barra de búsqueda */}
      <form onSubmit={handleSearch} style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
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