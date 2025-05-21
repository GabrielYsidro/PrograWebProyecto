import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from '../pages/PublicPages/Home';
import { Results } from '../pages/PublicPages/Results';
import { Product } from '../pages/PublicPages/Product';
import { Carrito } from '../pages/PublicPages/Carrito';
import { Checkout } from '../pages/PublicPages/Checkout';
import { Greeting } from '../pages/PublicPages/Greeting';
import {HomeAdmin} from '../pages/AdminPages/HomeAdmin';    
import {AddProduct} from '../pages/AdminPages/AddProduct';
import { DetailProduct } from '../pages/AdminPages/DetailProduct';
import { ListProduct } from '../pages/AdminPages/ListProduct';


export const AppRouter = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path = '/' element = {<Home/>}/>
                <Route path = '/results' element = {<Results/>}/>
                <Route path = '/product/:id' element = {<Product/>}/>
                <Route path = '/carrito' element = {<Carrito/>}/>
                <Route path = '/checkout' element = {<Checkout/>}/>
                <Route path = '/greeting' element = {<Greeting/>}/>
                <Route path = '/homeadmin' element = {<HomeAdmin/>}/>
                <Route path = '/addproduct' element = {<AddProduct/>}/>
                <Route path = '/detailproduct/:id' element = {<DetailProduct/>}/>
                <Route path = '/listproduct' element = {<ListProduct/>}/>
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