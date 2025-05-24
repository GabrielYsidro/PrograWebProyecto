import {useState, useEffect, useContext} from 'react'
import TopBar from '../../components/TopBar/TopBar.jsx'
import styles from '../../styles/Checkout.module.css'
import Footer from '../../components/Footer/Footer.jsx'

export const Checkout = () => {
    return (
        <div className={styles.container}>
            <TopBar />
            <div className={styles.titulo}>
                Esto es lo que estas llevando...
            </div>
            
            <Footer />
        </div>
    )

}

export default Checkout;
