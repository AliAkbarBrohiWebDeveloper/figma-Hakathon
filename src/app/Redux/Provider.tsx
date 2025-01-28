
"use client"
import { Provider } from 'react-redux';
import { store, persistor } from '@/app/Redux/store'; 
import { PersistGate } from 'redux-persist/integration/react'; 

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default ReduxProvider;

