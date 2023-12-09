import ReactDOM from 'react-dom/client'
import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { MultiviewApp } from './MultiviewApp'
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
            <BrowserRouter>
                    <MultiviewApp />
            </BrowserRouter>
  </React.StrictMode>
);
