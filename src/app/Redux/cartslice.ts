

"use client"
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  inventory: number;
}


interface CartState {
  items: CartItem[];
}


const getLocalStorage = (key: string) => {
  if (typeof window !== 'undefined') {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : null;
  }
  return null;
};

const initialState: CartState = {
  items: getLocalStorage('cart') || [], 
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
  
    setCart(state, action: PayloadAction<CartItem[]>) {
      state.items = action.payload;
    },
  
    addToCart(state, action: PayloadAction<CartItem>) {
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
   
      saveCartToLocalStorage(state.items);
    },
   
    removeFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter(item => item.id !== action.payload);
     
      saveCartToLocalStorage(state.items);
    },
   
    updateQuantity(state, action: PayloadAction<{ id: string; quantity: number }>) {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    
      saveCartToLocalStorage(state.items);
    },
  
    clearCart(state) {
      state.items = [];
   
      saveCartToLocalStorage(state.items);
    },
  },
});


const saveCartToLocalStorage = (cartItems: CartItem[]) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }
};

// Exporting actions for usage
export const { addToCart, removeFromCart, updateQuantity, clearCart, setCart } = cartSlice.actions;
export default cartSlice.reducer;
