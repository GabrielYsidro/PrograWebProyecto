import React, { useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DropCart from '../../components/DropCart/DropCart.jsx';
import WishlistItem from '../../components/WishListItem/WishListItem.jsx';
import styles from  '../../styles/Carrito.module.css'
import TopBar from '../../components/TopBar/TopBar.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import {initialWishlist} from '../../constants/Consts.jsx'
import { useCartContext } from '../../contexts/CartContext.jsx';
import { useUserContext } from '../../contexts/userContext.jsx';
import TopBarUser from '../../components/TopBarUser/TopBarUser.jsx';
import { useNavigate } from 'react-router-dom';
import { fetchWishlistByUserId } from '../../services/wishlistService';
//Cambio de prueba

export const Carrito = () => {

    const [wishlist, setWishlist] = useState([]);
    const {cartItems, setCartItems} = useCartContext();
    const { currentUser } = useUserContext();
    const [loadingWishlist, setLoadingWishlist] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
    const fetchWishlist = async () => {
        try {
        if (!currentUser?.id) return;

      const data = await fetchWishlistByUserId(currentUser.id);
      const translated = data.map(poke => ({
        id: poke.id,
        nombre: poke.name,
        precio: poke.price,
        imagen: poke.img,
        }));
        setWishlist(translated);
        console.log('Wishlist recibida:', translated);
        } catch (err) {
        console.error('Error al cargar wishlist:', err);
        } finally {
        setLoadingWishlist(false); // <-- se apaga cuando termina
        }
        };

        fetchWishlist();
        }, [currentUser]);

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

    const handleCheckout = () => {
        if (cartItems.length === 0) {
            alert('Tu carrito está vacío 🛒');
            return;
        }

        if (!currentUser) {
        alert('Por favor, inicia sesión para continuar con el pago 🔒');
        navigate('/login');
        return;
    }

        navigate('/checkout');
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

                        <div className={styles.scrollContainer}>
                            {loadingWishlist ? (
                            <p className={styles.mensajePoke}>Cargando tus favoritos... 🕐</p>
                            ) : (
                            wishlist.length > 0 ? (
                                wishlist.map(item => (
                                <WishlistItem key={item.id} item={item} />
                                ))
                            ) : (
                                <p className={styles.mensajePoke}>No tienes favoritos por ahora 😢</p>
                            )
                            )}
                        </div>
                    </div>
                </div>
                <button onClick={handleCheckout} className={styles.botonComprar}>
                    ¡Vamo' a Pagar!
                </button>
            </div>
            <Footer />
        </DndProvider>
    )

}

export default Carrito;
