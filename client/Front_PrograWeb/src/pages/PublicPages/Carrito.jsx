import {useState, useEffect, useContext} from 'react'
import styles from  '../../styles/Carrito.module.css'
import TopBar from '../../components/TopBar/TopBar.jsx'
import Footer from '../../components/Footer/Footer.jsx'

export const Carrito = () => {
    const [precio, setPrecio] = useState(0)


    return (
        <div className={styles.container}>
            <TopBar />
            <div className={styles.titulo}>
                Carrito de Compras
            </div>
            <div className={styles.listas}>
                <div className={styles.listaActual}>
                    Hola
                </div>
                <div className={styles.listaDeseos}>
                    Chau
                </div>
            </div>
            <Footer />
        </div>
    )

}

export default Carrito;
