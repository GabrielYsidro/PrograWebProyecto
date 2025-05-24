import { useState } from 'react';

export function usePaymentForm() {
  const [paymentMethod, setPaymentMethod] = useState('card'); // 'card' o 'qr'
  const [shippingOption, setShippingOption] = useState('pickup'); // 'pickup' o 'delivery'
  const [address, setAddress] = useState('');

  const isValid = () => {
    if (shippingOption === 'delivery' && address.trim() === '') {
      return false;
    }
    return true;
  };

  return {
    paymentMethod,
    setPaymentMethod,
    shippingOption,
    setShippingOption,
    address,
    setAddress,
    isValid
  };
}
