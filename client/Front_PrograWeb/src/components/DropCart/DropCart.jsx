import React from 'react';
import { useDrop } from 'react-dnd';
import CartItem from '../CartItem/CartItem.jsx';
import styles from '../DropCart/DropCart.module.css';

export const DropCart =({ items, onDrop }) => {

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'PRODUCT',
    drop: onDrop,
    collect: monitor => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div ref={drop} className={`${styles.cart} ${isOver ? styles.hover : ''}`}>
      <h2>Carrito de compras</h2>
      {items.length === 0 && <p>Arrastra productos aquí</p>}
      {items.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default DropCart;
