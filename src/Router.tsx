import { createBrowserRouter } from 'react-router-dom';
import { Character, Characters } from './routes';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <Characters />,
  },
  {
    path: 'character/:id',
    element: <Character />,
  },
]);
