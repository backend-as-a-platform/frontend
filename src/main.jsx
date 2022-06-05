import ReactDOM from 'react-dom';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ThemeProvider from './contexts/Theme';
import AuthProvider from './contexts/Auth';
import SearchProvider from './contexts/Search';

import './assets/css/index.css';

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider>
      <AuthProvider>
        <SearchProvider>
          <App />
        </SearchProvider>
      </AuthProvider>
    </ThemeProvider>
  </BrowserRouter>,
  document.querySelector('#root')
);
