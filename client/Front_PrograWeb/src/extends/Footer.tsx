import { Link } from 'react-router-dom';

const Footer = () => (
  <footer style={{ background: '#eee', padding: '1rem', textAlign: 'center' }}>
    <Link to="/" style={{ margin: '0 1rem' }}>Inicio</Link>
    <Link to="/carrito" style={{ margin: '0 1rem' }}>Carrito</Link>
    <Link to="/login" style={{ margin: '0 1rem' }}>Login</Link>
    <span style={{ margin: '0 1rem' }}>© Ecommerce</span>
  </footer>
);

export default Footer;