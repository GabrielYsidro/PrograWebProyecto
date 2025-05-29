import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from './routes/AppRouter.jsx'
import { CartProvider } from './contexts/CartContext.jsx';
import { CategoriaProvider } from './hooks/CategoriaContext.jsx';
import { OrdenProvider } from './hooks/OrdenContext.jsx';
import { ProductosProvider } from './hooks/ProductosContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <ProductosProvider>
        <OrdenProvider>
          <CategoriaProvider>  
            <AppRouter />
          </CategoriaProvider> 
        </OrdenProvider>
      </ProductosProvider>
    </CartProvider>
  </StrictMode>
)
