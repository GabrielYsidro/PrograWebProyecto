import { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import styles from '../TopBar/TopBar.module.css';

const gifLinks = [
  { to: '/', label: 'Inicio', gif: 'https://play.pokemonshowdown.com/sprites/ani/pikachu.gif' },
  { to: '/results', label: 'Resultados', gif: 'https://play.pokemonshowdown.com/sprites/ani/alakazam.gif' },
  { to: '/carrito', label: 'Carrito', gif: 'https://play.pokemonshowdown.com/sprites/ani/snorlax.gif' },
  { to: '/login', label: 'Login', gif: 'https://play.pokemonshowdown.com/sprites/ani/gengar.gif' },
  { to: '/categorias', label: 'Categorias', gif: 'https://play.pokemonshowdown.com/sprites/ani/haunter.gif' },
];

const TopBar = ({ handleInicio}) => {
  const [busqueda, setBusqueda] = useState('');
  const navigate = useNavigate();

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
        {gifLinks.map(({ to, label, gif }) =>
          label === 'Inicio' ? (
            <Link
              key={to}
              to={to}
              className={styles.link}
              onClick={handleInicio} // <-- Aquí ejecuta la función
            >
              <img src={gif} alt={label} className={styles.linkGif} />
              {label}
            </Link>
          ) : (
            <Link key={to} to={to} className={styles.link}>
              <img src={gif} alt={label} className={styles.linkGif} />
              {label}
            </Link>
          )
        )}
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
}

export default TopBar;