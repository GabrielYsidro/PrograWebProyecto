import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DropCart from '../../components/DropCart/DropCart.jsx';
import WishlistItem from '../../components/WishListItem/WishListItem.jsx';
import styles from  '../../styles/Carrito.module.css'
import TopBar from '../../components/TopBar/TopBar.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import {initialWishlist} from '../../constants/Consts.jsx'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../contexts/CartContext.jsx';
import { useUserContext } from '../../contexts/userContext.jsx';
import TopBarUser from '../../components/TopBarUser/TopBarUser.jsx';

export const Carrito = () => {

    const [wishlist, setWishlist] = useState(initialWishlist);
    const {cartItems, setCartItems} = useCartContext();
    const { currentUser } = useUserContext();

    const handleInicio = () => {};
    
    const handleDrop = (item) => {
    setCartItems(prev => {
        const existing = prev.find(p => p.id === item.id);
        if (existing) {
        // Si ya existe, incrementa la cantidad
        return prev.map(p =>
            p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
        );
        } else {
        // Si no existe, lo agrega con cantidad 1
        return [...prev, { ...item, quantity: 1 }];
        }
    });

    // Lo quitas de la wishlist igual
    setWishlist(prev => prev.filter(w => w.id !== item.id));
    };


    return (
        <DndProvider backend={HTML5Backend}>
            {(currentUser)? 
                    <TopBarUser handleInicio={handleInicio}/>
                :
                    <TopBar handleInicio={handleInicio}/>
                }
            <div className={styles.container}>
                <div className={styles.titulo}>
                    Carrito de Compras
                </div>
                <div className={styles.listas}>
                    <div className={styles.listaActual}>
                        <DropCart items={cartItems} onDrop={handleDrop} />
                    </div>
                    <div className={styles.listaDeseos}>
                        <div className={styles.titDeseo}>
                            Entre tus favoritos...
                        </div>
                        {wishlist.map(item => (
                            <WishlistItem key={item.id} item={item} />
                        ))}
                    </div>
                </div>
                <Link to="/checkout" className={styles.botonComprar}>
                    ¡Vamo' a Pagar!
                </Link>
            </div>
            <Footer />
        </DndProvider>
    )

}

export default Carrito;
