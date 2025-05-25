import { useDrag } from 'react-dnd';
import styles from '../WishListItem/WishListItem.module.css';

export const WishlistItem = ({ item }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'PRODUCT',
    item,
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
    <img src={item.imagen}></img>
    <strong>{item.nombre}</strong>
    <p>S/. {item.precio}</p>
    </div>
  );
}

export default WishlistItem;
