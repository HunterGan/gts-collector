import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import initApp from './init.jsx';
import reportWebVitals from './reportWebVitals';

const app = async () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  const app = await initApp();
  root.render(
    <React.StrictMode>
      {app}
    </React.StrictMode>
  );
}
app();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
