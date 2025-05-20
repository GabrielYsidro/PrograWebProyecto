import { Link } from 'react-router-dom';

const TopBar = ({ handleSearch, busqueda, setBusqueda }) => (
  <nav style={{ background: '#222', padding: '1rem' }}>
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
      <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Inicio</Link>
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
          style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ marginLeft: '0.5rem', padding: '0.5rem 1rem', borderRadius: '4px', border: 'none', background: '#fff', color: '#222', cursor: 'pointer' }}>
          Buscar
        </button>
      </form>
    </div>
  </nav>
);

export default TopBar;