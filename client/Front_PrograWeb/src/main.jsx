import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from './routes/AppRouter.jsx'
import { CartProvider } from './contexts/CartContext.jsx'; 
import  UserProvider  from './contexts/UserContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>       
      <CartProvider>      
        <AppRouter />
      </CartProvider>
    </UserProvider>
  </StrictMode>,
);
