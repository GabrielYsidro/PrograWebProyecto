// components/WishlistItem.jsx
import { useDrag } from 'react-dnd';
import styles from '../WishListItem/WishListItem.module.css';

export const WishlistItem = ({ item }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'PRODUCT',
    item, // <-- estás enviando el objeto completo (correcto)
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={styles.wishlistItem}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <img src={item.imagen} alt={item.nombre} />
      <strong>{item.nombre}</strong>
      <p>S/. {parseFloat(item.precio).toFixed(2)}</p>
    </div>
  );
};

export default WishlistItem;
