

// "use client"
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface CartItem {
//   id: string;
//   name: string;
//   price: number;
//   quantity: number;
//   image: string;
//   inventory: number;
// }



// interface CartState {
//   items: CartItem[];
// }

// const initialState: CartState = {
//   items: [], 
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     setCart(state, action: PayloadAction<CartItem[]>) {
//       state.items = action.payload;
//     },

//     addToCart(state, action: PayloadAction<CartItem>) {
//       const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
//       if (itemIndex >= 0) {
//         state.items[itemIndex].quantity += action.payload.quantity;
//       } else {
//         state.items.push(action.payload);
//       }
//     },

//     removeFromCart(state, action: PayloadAction<string>) {
//       state.items = state.items.filter(item => item.id !== action.payload);
//     },

//     updateQuantity(state, action: PayloadAction<{ id: string; quantity: number }>) {
//       const item = state.items.find(item => item.id === action.payload.id);
//       if (item) {
//         item.quantity = action.payload.quantity;
//       }
//     },

//     clearCart(state) {
//       state.items = [];
//     },
//   },
// });

// export const { addToCart, removeFromCart, updateQuantity, clearCart, setCart } = cartSlice.actions;
// export default cartSlice.reducer;




















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

const initialState: CartState = {
  items: [], 
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
    },

    removeFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },

    updateQuantity(state, action: PayloadAction<{ id: string; quantity: number }>) {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },

    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart, setCart } = cartSlice.actions;
export default cartSlice.reducer;

