import styles from './Promo.module.css';
import promo1 from '../../assets/promo.png';
import promo2 from '../../assets/promo2.png';

const Promo = () => (
  <div className={styles.banner}>
    <img src={promo1} alt="Promo Izquierda" className={styles.imgLeft} />
    <div className={styles.bannerContent}>
      <h2 className={styles.titulo}>CENTROS POKÉMON</h2>
      <p className={styles.texto}>
        ¡El mejor lugar para curar a tus Pokémon!<br />
        <span className={styles.descuento}>¡Ahora con 30% de descuento!</span>
      </p>
    </div>
    <img src={promo2} alt="Promo Derecha" className={styles.imgRight} />
  </div>
);

export default Promo;