import type { Router as RemixRouter } from '@remix-run/router';
import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom';

import { firstScreenRoutes } from './modules/firstScreen/routes';
import { loginRoutes } from './modules/login/routes';
import { productScreens } from './modules/product/routes';
import { useGlobalContext } from './shared/hooks/useGlobalContext';
import { useNotification } from './shared/hooks/useNotification';
import { verifyLoggedIn } from './shared/functions/connection/auth';

function App() {
  const { contextHolder } = useNotification();
  const { user, setUser } = useGlobalContext();

  const routes: RouteObject[] = [...loginRoutes];
  const routesLoggedIn: RouteObject[] = [...productScreens, ...firstScreenRoutes].map((route) => ({
      ...route,
      loader: () => verifyLoggedIn(setUser, user),
    }),
  );
  const router: RemixRouter = createBrowserRouter ([...routes, ...routesLoggedIn]);

  return (
    <>
      {contextHolder}
      <RouterProvider router={router} />
    </>
  );
}
export default App;
