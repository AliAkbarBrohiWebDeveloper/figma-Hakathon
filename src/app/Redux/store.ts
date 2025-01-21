
"use client"
// import { configureStore } from '@reduxjs/toolkit';
// import cartReducer from "@/app/Redux/cartslice" 

// export const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//   },
// });


// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;




'use client'

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartslice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// Define the RootState type so you can access it in useSelector
export type RootState = ReturnType<typeof store.getState>;

