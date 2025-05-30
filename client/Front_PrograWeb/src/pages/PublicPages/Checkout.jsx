import {useState, useEffect, useContext} from 'react'
import TopBar from '../../components/TopBar/TopBar.jsx'
import styles from '../../styles/Checkout.module.css'
import Footer from '../../components/Footer/Footer.jsx'
import PaymentSection from '../../components/PaymentSection/PaymentSection.jsx';
import OrderSummary from '../../components/OrderSummary/OrderSummary.jsx';
import { useCartContext } from '../../contexts/CartContext.jsx';
import { PaymentFormProvider } from '../../hooks/usePaymentForm.jsx';


export const Checkout = () => {

    const {cartItems, setCartItems} = useCartContext();

    return (
        <PaymentFormProvider>
        <div className={styles.container}>
            
            <div className={styles.titulo}>
                Completa tus datos de pago!
            </div>
            <div className={styles.cuerpo}>
            <PaymentSection />
            <OrderSummary items = {cartItems}/>
            </div>
            
        </div>
        </PaymentFormProvider>
    )

}

export default Checkout;
