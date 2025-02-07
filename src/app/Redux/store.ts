// "use client"

// import { configureStore } from "@reduxjs/toolkit"

// import { persistReducer, persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import cartReducer from "@/app/Redux/cartslice"


// const persistConfig={
//   key:'cart',
//   storage,
// };
// const persistedCartReducer=persistReducer(persistConfig,cartReducer)



// const store=configureStore({
//   reducer:{
//     cart:persistedCartReducer

//   }

// });

// const persistor=persistStore(store)


// export type RootState= ReturnType<typeof store.getState>;
// export {store,persistor}






// "use client"
// import { configureStore } from '@reduxjs/toolkit';
// import { persistReducer, persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import cartReducer from '@/app/Redux/cartslice';


// const persistConfig = {
//   key: 'cart',
//   storage, 
// };

// const persistedCartReducer = persistReducer(persistConfig, cartReducer);


// const store = configureStore({
//   reducer: {
//     cart: persistedCartReducer,
//   },
// });


// const persistor = persistStore(store);


// export type RootState = ReturnType<typeof store.getState>;

// export { store, persistor };













































// "use client";
// import { configureStore } from '@reduxjs/toolkit';
// import { persistReducer, persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import cartReducer from '@/app/Redux/cartslice';

// // Persist Configuration
// const persistConfig = {
//   key: 'cart',
//   storage, 
// };

// // Wrap your reducer with persistReducer
// const persistedCartReducer = persistReducer(persistConfig, cartReducer);

// // Configure Store with serializableCheck disabled (if needed)
// const store = configureStore({
//   reducer: {
//     cart: persistedCartReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: ['persist/REHYDRATE'], // Ignore this action if needed
//       },
//     }),
// });

// // Persistor Setup
// const persistor = persistStore(store);

// // Type Definition
// export type RootState = ReturnType<typeof store.getState>;

// export { store, persistor };












// "use client"
// import { configureStore } from '@reduxjs/toolkit';
// import { persistReducer, persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import cartReducer from '@/app/Redux/cartslice'; // Ensure the path is correct

// const persistConfig = {
//   key: 'cart',
//   storage,
//   whitelist: ['cart'], // Ensuring only 'cart' slice is persisted
// };

// const persistedCartReducer = persistReducer(persistConfig, cartReducer);

// const store = configureStore({
//   reducer: {
//     cart: persistedCartReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: ['persist/REHYDRATE'], // Ignore rehydrate actions
//       },
//     }),
// });

// const persistor = persistStore(store);

// export { store, persistor };
























"use client";

import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "@/app/Redux/cartslice";


const persistConfig = {
  key: "cart", 
  storage, 
};


const persistedCartReducer = persistReducer(persistConfig, cartReducer);


const store = configureStore({
  reducer: {
    cart: persistedCartReducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }),
});


const persistor = persistStore(store);


export type RootState = ReturnType<typeof store.getState>;
export { store, persistor };