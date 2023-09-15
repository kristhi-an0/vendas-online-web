import './main.css';
import type { Router as RemixRouter } from '@remix-run/router';
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, RouteObject } from 'react-router-dom';
import { loginRoutes } from './modules/login/routes';
import { GlobalProvider } from './shared/hooks/useGlobalContext';

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
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  </React.StrictMode>,
);
