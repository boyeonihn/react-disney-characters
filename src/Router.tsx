import { createBrowserRouter } from 'react-router-dom';
import { Character, Characters, NotFound } from './routes';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <Characters />,
    errorElement: <NotFound />,
  },
  {
    path: 'character/:id',
    element: <Character />,
    errorElement: <NotFound />,
  },
]);
