import {useState, useEffect, useContext} from 'react'
import TopBar from '../../components/TopBar/TopBar.jsx'
import styles from '../../styles/Checkout.module.css'
import Footer from '../../components/Footer/Footer.jsx'
import PaymentSection from '../../components/PaymentSection/PaymentSection.jsx';
import OrderSummary from '../../components/OrderSummary/OrderSummary.jsx';
import { useCartContext } from '../../hooks/CartContext.jsx';


export const Checkout = () => {

    const {cartItems, setCartItems} = useCartContext();

    return (
        <div className={styles.container}>
            <TopBar />
            <div className={styles.titulo}>
                Completa tus datos de pago!
            </div>
            <PaymentSection />
            <OrderSummary items = {cartItems}/>
            
            <Footer />
        </div>
    )

}

export default Checkout;
