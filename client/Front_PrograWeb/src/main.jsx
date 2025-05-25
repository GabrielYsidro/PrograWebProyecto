import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from './routes/AppRouter.jsx'
import { CartProvider } from './contexts/cartContext.jsx'; // Importo el CartProvider
import { UserProvider } from './contexts/userContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>        {/* Primero envuelvo UserProvider */}
      <CartProvider>      {/* Luego CartProvider */}
        <AppRouter />
      </CartProvider>
    </UserProvider>
  </StrictMode>,
);
