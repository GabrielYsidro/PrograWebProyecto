import {useState, useEffect, useContext} from 'react'
import styles from  '../../styles/Carrito.module.css'

export const Carrito = () => {
    const [precio, setPrecio] = useState(0)

    return (
        <div className={styles.container}>
            Este es el carrito
        </div>
    )

}

export default Carrito;
