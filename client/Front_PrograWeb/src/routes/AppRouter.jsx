import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home} from '../pages/Home.jsx'

export const AppRouter = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path = '/' element = {<Home/>}/>

            </Routes>

        </BrowserRouter>
    )
}

export default AppRouter;

/* Comentarios utiles:
-> BrowserRouter es el componente por donde se va a renderizar todas las rutas
-> Routes permite agrupar cierto conjunto de rutas en base a su caracteristica publica o privada, en este caso, todas seran publicas
-> Route permite definir un .jsx que funcionara como pagina: path es la parte del URL que tendra y element el componente a renderizar
*/