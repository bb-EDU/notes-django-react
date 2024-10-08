import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './components/Dashboard.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import Login from './components/Login.jsx';
import NewNote from './components/NewNote.jsx';
import Note from './components/Note.jsx';
import Navbar from './components/Navbar.jsx';
import Register from './components/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      { 
        path: "/",
        element: <Dashboard />,
      }
    ]
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <ErrorPage />
  },
  {
    path: "/new",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      { 
        path: "/new",
        element: <NewNote />,
      }
    ]
  },
  {
    path: "/note/:id",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      { 
        path: "/note/:id",
        element: <Note />,
      }
    ]
  },
  {
    path: "/users/:userId",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      { 
        path: "/users/:userId",
        element: <Dashboard />,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
