import ReactDOM from 'react-dom';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ThemeProvider from './contexts/Theme';
import AuthProvider from './contexts/Auth';
import { SidebarProvider } from './contexts/Sidebar';

import './assets/css/index.css';

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider>
      <SidebarProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </SidebarProvider>
    </ThemeProvider>
  </BrowserRouter>,
  document.querySelector('#root')
);
