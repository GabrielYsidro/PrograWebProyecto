import { Link } from 'react-router-dom';

const TopBar = ({ handleSearch, busqueda, setBusqueda }) => (
  <nav style={{ background: '#222', padding: '1rem' }}>
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
      <Link to="/homeadmin" style={{ color: '#fff', textDecoration: 'none' }}>Inicio</Link>
      <Link to="/addproduct" style={{ color: '#fff', textDecoration: 'none' }}>Agregar Producto</Link>
      <Link to="/listproduct" style={{ color: '#fff', textDecoration: 'none' }}>Lista de Productos</Link>
    </div>
  </nav>
);

export default TopBar;