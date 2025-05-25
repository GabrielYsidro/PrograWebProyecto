import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from './routes/AppRouter.jsx'
import { CartProvider } from './hooks/CartContext.jsx';
import { CategoriaProvider } from './hooks/CategoriaContext.jsx';
import { OrdenProvider } from './hooks/OrdenContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <OrdenProvider>
        <CategoriaProvider>  
          <AppRouter />
        </CategoriaProvider> 
      </OrdenProvider>
    </CartProvider>
  </StrictMode>,
)
