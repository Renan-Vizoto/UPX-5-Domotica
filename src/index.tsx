import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './pages/Login';
import Home from './pages/Home';
import Horario from './pages/Horario';
import Programados from './pages/Programados';
import { HorariosProvider } from './context';

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/programar-horarios",
    element: <Horario />
  },
  {
    path: "/horarios-programados",
    element: <Programados />
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <HorariosProvider>
      <RouterProvider router={router} />
    </HorariosProvider>
  </React.StrictMode>
);
