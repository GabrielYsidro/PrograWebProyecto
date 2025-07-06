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
      <img src={item.img} alt={item.name} />
      <strong>{item.name}</strong>
      <p>S/. {parseFloat(item.price).toFixed(2)}</p>
    </div>
  );
};

export default WishlistItem;
