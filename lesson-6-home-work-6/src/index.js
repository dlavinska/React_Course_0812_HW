import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import BooksInfoContext from './context/BooksInfoContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BooksInfoContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </BooksInfoContext>
  </React.StrictMode>
);