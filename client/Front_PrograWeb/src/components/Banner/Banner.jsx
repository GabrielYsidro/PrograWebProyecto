import styles from './Banner.module.css';

const Banner = ({ productos }) => {
  const top12 = [...productos]
    .sort((a, b) => b.precio - a.precio)
    .slice(0, 12);

  return (
    <section className={styles.topBanner}>
      <h2 className={styles.topBannerTitle}>Top 12 Pokémons más vendidos</h2>
      <div className={styles.topBannerCarrusel}>
        <div className={styles.carruselTrack}>
          {top12.map((producto, idx) => (
            <div className={styles.carruselItem} key={producto.id + '-' + idx}>
              <img src={producto.imagen} alt={producto.nombre} />
              <span>{producto.nombre}</span>
            </div>
          ))}
          {top12.map((producto, idx) => (
            <div className={styles.carruselItem} key={'dup-' + producto.id + '-' + idx}>
              <img src={producto.imagen} alt={producto.nombre} />
              <span>{producto.nombre}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;