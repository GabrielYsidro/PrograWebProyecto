import {useState, useEffect, useContext, useLayoutEffect} from 'react'
import styles from  '../../styles/Greeting.module.css'
import { productosGreeting } from '../../constants/Consts.jsx';
import { useNavigate } from 'react-router-dom';
export const Greeting = () => {

    const navigate = useNavigate();

    const [visibleCount, setVisibleCount] = useState(0);

    const handleClick = () => {
        if (visibleCount < productosGreeting.length) {
            setVisibleCount(visibleCount + 1)
        }
    }

    useEffect(() => {
        const handleClick = () => {
        const audio = new Audio('/pikachu.mp3');
        audio.play();
        document.removeEventListener('click', handleClick);
    };

        document.addEventListener('click', handleClick);

    return () => {
        document.removeEventListener('click', handleClick);
    };
    }, []);

    const handleVolverHome = () => {
            navigate('/');
    };
    
    
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
                    {productosGreeting.map((prod, index) => (
                        <img
                            key ={prod.id}
                            src={prod.src}
                            alt={prod.alt}
                            className={`${styles.productoImg} ${index < visibleCount ? styles.visible : ''}`}
                            >
                        </img>
                    ))}
                </div>
                <button onClick={handleVolverHome} className={styles.botonHome}>
                    Volver a Home
                </button>
            </div>
        <img className={styles.pokebola} src='/pokebola.gif' alt='Pokebola' onClick={handleClick}></img>
        
        </div>
    )

}

export default Greeting;
