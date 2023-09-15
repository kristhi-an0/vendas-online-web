import './main.css';
import type { Router as RemixRouter } from '@remix-run/router';
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, RouteObject } from 'react-router-dom';
import { loginRoutes } from './modules/login/routes';

const mainRoutes: RouteObject[] = [
  {
    path: '/',
    element: <div>TELA PRINCIPAL</div>,
    errorElement: <div>Página não encontrada!</div>
  },
];

const router: RemixRouter = createBrowserRouter ([
  ...mainRoutes,
  ...loginRoutes,
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
