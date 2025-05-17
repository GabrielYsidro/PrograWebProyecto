import {useState, useEffect, useContext} from 'react'
import styles from  '../../styles/Greeting.module.css'




export const Greeting = () => {

    const [visibleCount, setVisibleCount] = useState(0)

    const productos = [
        {id: 1, src : '/src/assets/eter.png', alt : 'Eter'},
        {id: 2, src : '/src/assets/MT.png', alt : 'MT'},
        {id: 3, src : '/src/assets/master-ball.png', alt: 'MasterBall'}
    ]

    const handleClick = () => {
        if (visibleCount < productos.length) {
            setVisibleCount(visibleCount + 1)
        }
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.principal}>
                <div className={styles.gracias} >
                    ¡Gracias por tu compra!
                </div>
                <div className={styles.productos}>
                    Otros productos que pueden interesarte: 
                </div>
                <div className={styles.listaProductos}>
                    {productos.map((prod, index) => (
                        <img
                            key ={prod.id}
                            src={prod.src}
                            alt={prod.alt}
                            className={`${styles.productoImg} ${index < visibleCount ? styles.visible : ''}`}
                            >
                        </img>
                    ))}
                </div>
            </div>
        <img className={styles.pokebola} src='/src/assets/pokebola.gif' alt='Pokebola' onClick={handleClick}></img>
        </div>
    )

}

export default Greeting;