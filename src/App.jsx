import 'tailwindcss/tailwind.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SharedLayout from './layout/SharedLayout';
import Start from './component/Start';
import Loader from './Pages/Loader';
import Home from './Pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SharedLayout />,
    children: [
      {
        index: true,
        element: <Start />,
      },
      {
        path: '/loader',
        element: <Loader />,
      },
      { path: '/home', element: <Home /> },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
