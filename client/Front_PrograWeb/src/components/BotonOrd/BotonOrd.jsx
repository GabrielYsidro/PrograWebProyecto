import styles from './BotonOrd.module.css';

function BotonOrd({ orden, setOrden }) {
  return (
    <div className={styles.filtro}>
      <label htmlFor="filtro">Ordenar por:</label>
      <select
        name="filtro"
        id="filtro"
        value={orden}
        onChange={e => setOrden(e.target.value)}
      >
        <option value="nombreA">Orden alfabético (A-Z)</option>
        <option value="nombreZ">Orden alfabético (Z-A)</option>
        <option value="des">Precio ↓</option>
        <option value="asc">Precio ↑</option>
      </select>
    </div>
  );
}

export default BotonOrd;