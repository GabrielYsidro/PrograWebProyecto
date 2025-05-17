import {useState, useEffect, useContext} from 'react'
import '../../styles/Greeting.module.css'


export const Greeting = () => {
    return (
        <div className='container'>
            Gracias por tu compra!
            <img src='/src/assets/pokebola.gif' alt='Pokebola'></img>
        </div>
    )

}

export default Greeting;