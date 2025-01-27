
"use client"
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from '@/app/Redux/cartslice';


const persistConfig = {
  key: 'cart',
  storage, 
};

const persistedCartReducer = persistReducer(persistConfig, cartReducer);


const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
  },
});


const persistor = persistStore(store);


export type RootState = ReturnType<typeof store.getState>;

export { store, persistor };
