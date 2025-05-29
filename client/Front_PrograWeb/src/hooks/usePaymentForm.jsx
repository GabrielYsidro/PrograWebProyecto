// hooks/PaymentFormContext.jsx
import { createContext, useContext, useState } from 'react';

const PaymentFormContext = createContext();

export const PaymentFormProvider = ({ children }) => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [shippingOption, setShippingOption] = useState('pickup');
  const [address, setAddress] = useState('');

  const isValid = () => {
    return shippingOption !== 'delivery' || address.trim() !== '';
  };

  return (
    <PaymentFormContext.Provider value={{
      paymentMethod,
      setPaymentMethod,
      shippingOption,
      setShippingOption,
      address,
      setAddress,
      isValid
    }}>
      {children}
    </PaymentFormContext.Provider>
  );
};

export const usePaymentForm = () => useContext(PaymentFormContext);
