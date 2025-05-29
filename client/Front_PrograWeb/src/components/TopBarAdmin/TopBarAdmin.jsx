import { Link } from 'react-router-dom';
import styles from '../TopBar/TopBar.module.css';

const gifLinks = [
  { to: '/homeadmin', label: 'Inicio', gif: 'https://play.pokemonshowdown.com/sprites/ani/pikachu.gif' },
  { to: '/addproduct', label: 'Agregar producto', gif: 'https://play.pokemonshowdown.com/sprites/ani/alakazam.gif' },
  { to: '/listproduct', label: 'Lista producto', gif: 'https://play.pokemonshowdown.com/sprites/ani/chansey.gif' }, 
];

const TopBar = () => (
  <nav style={{ background: '#222', padding: '1rem', margin:'0.5%', borderRadius:'10px' }}>
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
      <Link to="/homeadmin" style={{ color: '#fff', textDecoration: 'none' }}>Inicio</Link>
      <Link to="/addproduct" style={{ color: '#fff', textDecoration: 'none' }}>Agregar producto</Link>
      <Link to="/listproduct" style={{ color: '#fff', textDecoration: 'none' }}>Lista productos</Link>
      <Link to="/listcategories" style={{ color: '#fff', textDecoration: 'none' }}>Lista de Categorías</Link>
      <Link to="/listusers" style={{ color: '#fff', textDecoration: 'none' }}>Lista de Usuarios</Link>
      <Link to="/listOrders" style={{ color: '#fff', textDecoration: 'none' }}>Lista de Órdenes</Link>
    </div>
  </nav>
);

export default TopBar;