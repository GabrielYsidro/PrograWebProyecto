import {useState, useEffect, useContext} from 'react'
import styles from  '../../styles/Greeting.module.css'


export const Greeting = () => {
    
    return (
        <div className={styles.container}>
        <div className={styles.gracias} >
            ¡Gracias por tu compra!
        </div>
        <img className={styles.pokebola} src='/src/assets/pokebola.gif' alt='Pokebola'></img>
        </div>
    )

}

export default Greeting;