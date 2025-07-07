import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from './routes/AppRouter.jsx'
import { CartProvider } from './contexts/CartContext.jsx';
import { CategoriaProvider } from './hooks/CategoriaContext.jsx';
import { OrdenProvider } from './hooks/OrdenContext.jsx';
import { ProductosProvider } from './hooks/ProductosContext.jsx';
import { UserProvider } from './contexts/userContext.jsx';
import { BrowserRouter } from 'react-router-dom';
import { WishlistProvider } from './hooks/WishlistContext.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CartProvider>
          <WishlistProvider>
            <ProductosProvider>
              <OrdenProvider>
                <CategoriaProvider>           
                    <AppRouter />
                </CategoriaProvider> 
              </OrdenProvider>
            </ProductosProvider>
          </WishlistProvider>
        </CartProvider>
       </UserProvider>
    </BrowserRouter>
  </StrictMode>
)
