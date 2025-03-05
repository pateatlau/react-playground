import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

// import ThemeProvider from './components/ThemeProvider';
import UserContextProvider from './contexts/context-api/UserContextProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </StrictMode>
);
