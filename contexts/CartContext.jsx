'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('soap-stache-cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('soap-stache-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, type = 'bar') => {
    const itemId = `${product._id}-${type}`;
    const price = type === 'loaf' ? product.loafPrice || 25 : product.price;

    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === itemId);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [
          ...prevItems,
          {
            id: itemId,
            productId: product._id,
            title: product.title,
            price: price,
            photo: product.photo,
            type: type,
            quantity: 1,
            slug: product.slug,
          },
        ];
      }
    });

    // Show cart when item is added
    setIsCartOpen(true);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId);
      return;
    }

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const getCartItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const value = {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
