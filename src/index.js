import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const text = "Hello";

const elem = (
  <div>
    <h2>Text: {text}</h2>
    <input type="text" />
    <button>Click</button>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  elem
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);
