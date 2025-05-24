import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from '../pages/PublicPages/Home';
import { Categorias } from '../pages/PublicPages/Categorias';
import { Results } from '../pages/PublicPages/Results';
import { Product } from '../pages/PublicPages/Product';
import { Carrito } from '../pages/PublicPages/Carrito';
import { Checkout } from '../pages/PublicPages/Checkout';
import { Greeting } from '../pages/PublicPages/Greeting';
import {HomeAdmin} from '../pages/AdminPages/HomeAdmin';    
import {AddProduct} from '../pages/AdminPages/AddProduct';
import { DetailProduct } from '../pages/AdminPages/DetailProduct';
import { ListProduct } from '../pages/AdminPages/ListProduct';
import ListCategories from '../pages/AdminPages/ListCategories';
import ScrollToTop from '../components/ScrollTop/ScrollTop.jsx';
import ListaUsuarios from '../pages/AdminPages/ListUsers.jsx';
import DetalleUsuario from '../pages/AdminPages/DetailsUser.jsx';
import ListaOrdenes from '../pages/AdminPages/ListOrders.jsx'
import OrdenDetalle from '../pages/AdminPages/DetailsOrders.jsx';

export const AppRouter = () => {

    return (
        <BrowserRouter>
        <ScrollToTop />
            <Routes>
                <Route path = '/' element = {<Home/>}/>
                <Route path = '/categorias' element = {<Categorias/>}/>
                <Route path = '/results' element = {<Results/>}/>
                <Route path = '/product/:id' element = {<Product/>}/>
                <Route path = '/carrito' element = {<Carrito/>}/>
                <Route path = '/checkout' element = {<Checkout/>}/>
                <Route path = '/greeting' element = {<Greeting/>}/>
                <Route path = '/homeadmin' element = {<HomeAdmin/>}/>
                <Route path = '/addproduct' element = {<AddProduct/>}/>
                <Route path = '/detailproduct/:id' element = {<DetailProduct/>}/>
                <Route path = '/listproduct' element = {<ListProduct/>}/>
                <Route path = '/listcategories' element = {<ListCategories/>}/>
                <Route path = '/listusers' element = {<ListaUsuarios/>} />
                <Route path = '/usuarios/:id' element = { <DetalleUsuario />} />
                <Route path = '/ordenes/' element = { <ListaOrdenes />} />
                <Route path = '/ordenes/:id' element = { <OrdenDetalle />} />

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