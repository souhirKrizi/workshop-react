import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import RootLayout from './RootLayout';
import App from './App';
import NotFound from './Components/NotFound';

const EventDetails = lazy(() => import('./Components/EventDetails'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: 'events',
        element: <App />,
      },
      {
        path: 'events/:name',
        element: <EventDetails />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
