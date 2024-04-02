
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartValue, setCartValue] = useState(0);

  const updateCartValue = (newValue) => {
    setCartValue(newValue);
  };

  return (
    <CartContext.Provider value={{ cartValue, updateCartValue }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
