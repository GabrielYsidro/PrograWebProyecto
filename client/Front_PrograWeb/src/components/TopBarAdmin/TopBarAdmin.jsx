import { Link } from 'react-router-dom';
import styles from '../../styles/TopBar.module.css';

const gifLinks = [
  { to: '/homeadmin', label: 'Inicio', gif: 'https://play.pokemonshowdown.com/sprites/ani/pikachu.gif' },
  { to: '/addproduct', label: 'Agregar producto', gif: 'https://play.pokemonshowdown.com/sprites/ani/alakazam.gif' },
  { to: '/listproduct', label: 'Lista producto', gif: 'https://play.pokemonshowdown.com/sprites/ani/chansey.gif' }, 
];

const TopBar = ({ handleSearch, busqueda, setBusqueda }) => (
  <nav style={{ background: '#222', padding: '1rem' }}>
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
      <Link to="/homeadmin" style={{ color: '#fff', textDecoration: 'none' }}>Inicio</Link>
      <Link to="/addproduct" style={{ color: '#fff', textDecoration: 'none' }}>Agregar producto</Link>
      <Link to="/listproduct" style={{ color: '#fff', textDecoration: 'none' }}>Lista productos</Link>
    </div>
  </nav>
);

export default TopBar;