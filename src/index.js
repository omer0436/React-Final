import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from './Components/Products';
import Shopping from './Components/Shopping';
import Home from './Components/Home';
import DataContextProvider from './Context/DataContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/basket",
    element: <Shopping />
  },
  {
    path: "/products",
    element: <Products />
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DataContextProvider>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </DataContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();