import styles from './NuevasCiudades.module.css';
import ciudad1 from '../../assets/ciudad1.png';
import ciudad2 from '../../assets/ciudad2.png';
import ciudad3 from '../../assets/ciudad3.png';

const NuevasCiudades = () => (
  <section className={styles.ciudadesSection}>
    <h2 className={styles.titulo}>¡Nuevas ciudades pronto!</h2>
    <div className={styles.ciudadesFila}>
      <div className={styles.ciudadBloque}>
        <img src={ciudad1} alt="Ciudad 1" className={styles.ciudadImg} />
      </div>
      <div className={styles.ciudadBloque}>
        <img src={ciudad2} alt="Ciudad 2" className={styles.ciudadImg} />
      </div>
      <div className={styles.ciudadBloque}>
        <img src={ciudad3} alt="Ciudad 3" className={styles.ciudadImg} />
      </div>
    </div>
  </section>
);

export default NuevasCiudades;