import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useUserContext } from '../../contexts/userContext';
import styles from '../TopBar/TopBar.module.css';

const TopBarUser = ({ handleInicio }) => {
  const { logout, currentUser } = useUserContext();
  const navigate = useNavigate();
  const [busqueda, setBusqueda] = useState('');

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const query = busqueda.trim().toLowerCase();
    if (query) {
      navigate(`/results?search=${encodeURIComponent(query)}`);
      setBusqueda('');
    }
  };

  return (
    <nav className={styles.topbar}>
      <div className={styles.linksContainer}>
        <Link to="/" className={styles.link} onClick={handleInicio}>
          <img
            src="https://play.pokemonshowdown.com/sprites/ani/pikachu.gif"
            alt="Inicio"
            className={styles.linkGif}
          />
          Inicio
        </Link>
        
        <Link to="/carrito" className={styles.link}>
          <span role="img" aria-label="Carrito" style={{ fontSize: 22, marginRight: 6 }}>🛒</span>
          Carrito
        </Link>
        <Link to="/categorias" className={styles.link}>
          <img
            src="https://play.pokemonshowdown.com/sprites/ani/haunter.gif"
            alt="Categorias"
            className={styles.linkGif}
          />
          Categorias
        </Link>
        <Link to="/change-password" className={styles.link}>
          <img
            src="https://play.pokemonshowdown.com/sprites/ani/sprigatito.gif"
            alt="Cambiar Contraseña"
            className={styles.linkGif}
          />
          Cambiar Contraseña
        </Link>
        <Link to="/homeuser" className={styles.link}>
          <img
            src="https://play.pokemonshowdown.com/sprites/ani/totodile.gif"
            alt="Cambiar Contraseña"
            className={styles.linkGif}
          />
          {currentUser?.name ? `Tu cuenta ${currentUser.name}` : 'Usuario'}
        </Link>

        <button
          onClick={handleLogout}
          className={styles.searchButton}
          style={{ marginTop: '1.3rem', background: '#e74c3c', color: '#fff', border: 'none' }}
        >
          Cerrar sesión
        </button>
        <form onSubmit={handleSearch} className={styles.searchForm}>
          <input
            type="text"
            placeholder="Buscar productos..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className={styles.searchInput}
          />
          <button type="submit" className={styles.searchButton}>
            Buscar
          </button>
        </form>
      </div>
    </nav>
  );
};

export default TopBarUser;