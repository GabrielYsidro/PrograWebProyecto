import {useState} from 'react'

export const Home = () => {
    const [numero, setNumero] = useState(5)
    return (
        <div>
            Prueba para devolver {numero}
        </div>
    )
}

export default Home;