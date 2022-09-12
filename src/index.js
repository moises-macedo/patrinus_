import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { GLobalStyled } from './Assets/Styles/global';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GLobalStyled />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
