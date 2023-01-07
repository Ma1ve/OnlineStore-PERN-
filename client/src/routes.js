import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  DEVICE_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from './utils/counts';

// authRoutes
import Admin from './pages/Admin';
import Basket from './pages/Basket';

// publicRoutes
import Auth from './pages/Auth';
import Device from './pages/DevicePage';
import Shop from './pages/Shop';

export const authRoutes = [
  { path: ADMIN_ROUTE, Components: <Admin /> },
  { path: BASKET_ROUTE, Components: <Basket /> },
];

export const publicRoutes = [
  { path: LOGIN_ROUTE, Components: <Auth /> },
  { path: REGISTRATION_ROUTE, Components: <Auth /> },
  { path: DEVICE_ROUTE + '/:id', Components: <Device /> },
  { path: SHOP_ROUTE, Components: <Shop /> },
];
