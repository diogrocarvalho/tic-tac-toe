import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Page from './routes/tic-tac-toe/index.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [{ path: '/tic-tac-toe', element: <Page /> }],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
