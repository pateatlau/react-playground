import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

// import UserContextProvider from './contexts/context-api/UserContextProvider.tsx';
import { Provider } from 'react-redux';
import { store } from './contexts/rtk/store.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      {/* <UserContextProvider> */}
      <App />
      {/* </UserContextProvider> */}
    </Provider>
  </StrictMode>
);
