import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Profile from './components/profile';
import Dashboard from './components/dashboard';

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
  },
  {
    path: "/profile",
    element: <Profile></Profile>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
