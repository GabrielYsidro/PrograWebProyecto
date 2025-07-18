import {Routes, Route} from 'react-router-dom';
import { Home } from '../pages/PublicPages/Home';
import { Categorias } from '../pages/PublicPages/Categorias';
import { Results } from '../pages/PublicPages/Results';
import { Carrito } from '../pages/PublicPages/Carrito';
import { Checkout } from '../pages/PublicPages/Checkout';
import { Greeting } from '../pages/PublicPages/Greeting';
import {HomeAdmin} from '../pages/AdminPages/HomeAdmin';    
import {AddProduct} from '../pages/AdminPages/AddProduct';
import { DetailProduct } from '../pages/AdminPages/DetailProduct';
import { ListProduct } from '../pages/AdminPages/ListProduct';
import ListCategories from '../pages/AdminPages/ListCategories';
import ScrollToTop from '../components/ScrollTop/ScrollTop.jsx';
import ListUsers from '../pages/AdminPages/ListUsers.jsx';
import DetailsUser from '../pages/AdminPages/DetailsUser.jsx';
import ListOrders from '../pages/AdminPages/ListOrders.jsx'
import DetailsOrders from '../pages/AdminPages/DetailsOrders.jsx';
import { Login } from '../pages/PublicPages/Login.jsx';
import DetalleProducto from '../components/DetalleProducto/DetalleProducto.jsx';
import Register from '../pages/PublicPages/Register.jsx';
import ChangePassword from '../pages/PublicPages/ChangePassword.jsx';
import RecoverPassword from '../pages/PublicPages/RecoverPassword.jsx';
import HomeUser from '../pages/UserPages/HomeUser.jsx';
import User from "../pages/UserPages/User.jsx";
import { Navigate } from "react-router-dom";
import { useUserContext } from "../contexts/userContext.jsx";
import Orders from "../pages/UserPages/Orders.jsx";

function PrivateRoute({ children }) {
  const { currentUser } = useUserContext();
  return currentUser ? children : <Navigate to="/login" />;
}

export const AppRouter = () => (
  <>
    <ScrollToTop />
    <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/categorias' element = {<Categorias/>}/>
        <Route path = '/results' element = {<Results/>}/>
        <Route path = '/product/:id' element = {<DetalleProducto/>}/>
        <Route path = '/carrito' element = {<Carrito/>}/>
        <Route path = '/checkout' element = {<Checkout/>}/>
        <Route path = '/greeting' element = {<Greeting/>}/>
        <Route path = '/homeadmin' element = {<HomeAdmin/>}/>
        <Route path = '/addproduct' element = {<AddProduct/>}/>
        <Route path = '/detailproduct/:id' element = {<DetailProduct/>}/>
        <Route path = '/listproduct' element = {<ListProduct/>}/>
        <Route path = '/listcategories' element = {<ListCategories/>}/>
        <Route path = '/listusers' element = {<ListUsers/>} />
        <Route path = '/usuarios/:id' element = { <DetailsUser />} />
        <Route path = '/listOrders/' element = { <ListOrders />} />
        <Route path = '/Order/:id' element = { <DetailsOrders />} />
        <Route path = '/login' element = { <Login />} />
        <Route path = '/register' element = { <Register />} />
        <Route path = '/homeuser' element = { <HomeUser />} />
        <Route path = '/change-password' element = { <ChangePassword />} />
        <Route path = '/recover-password' element = { <RecoverPassword />} />
        <Route path = '/orders/:id' element = {<Orders/>} />
    </Routes>
  </>
);

export default AppRouter;

/* Comentarios utiles:
-> BrowserRouter es el componente por donde se va a renderizar todas las rutas
-> Routes permite agrupar cierto conjunto de rutas en base a su caracteristica publica o privada, en este caso, todas seran publicas
-> Route permite definir un .jsx que funcionara como pagina: path es la parte del URL que tendra y element el componente a renderizar
*/