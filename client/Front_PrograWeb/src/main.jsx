import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from './routes/AppRouter.jsx'
import { CartProvider } from './contexts/CartContext.jsx';
import { CategoriaProvider } from './hooks/CategoriaContext.jsx';
import { OrdenProvider } from './hooks/OrdenContext.jsx';
import { ProductosProvider } from './hooks/ProductosContext.jsx';
import { UserProvider } from './contexts/userContext.jsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <ProductosProvider>
          <OrdenProvider>
            <CategoriaProvider>
              <UserProvider>
                <AppRouter />
              </UserProvider>
            </CategoriaProvider> 
          </OrdenProvider>
        </ProductosProvider>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
)
