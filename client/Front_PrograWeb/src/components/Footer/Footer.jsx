import { Link } from 'react-router-dom';
import styles from '../Footer/Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <Link to="/" className={styles.footerLink}>
      <span role="img" aria-label="pokeball">🔴</span> Inicio
    </Link>
    <Link to="/carrito" className={styles.footerLink}>
      <span role="img" aria-label="snorlax">🛒</span> Carrito
    </Link>
    <Link to="/login" className={styles.footerLink}>
      <span role="img" aria-label="pikachu">⚡</span> Login
    </Link>
    <span className={styles.footerCopy}>
      <span role="img" aria-label="pokeball">©</span> Ecommerce Pokémon
    </span>
  </footer>
);

export default Footer;