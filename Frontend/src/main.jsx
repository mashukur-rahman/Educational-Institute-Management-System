// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";
import App from "./App";
import Login from "./Components/security/Login";
import Register from "./Components/security/Register";
import Admin from "./Components/AdminFolder/Admin";
import Home from "./Components/Home/Home";
import Main from "./Components/Main/Main";
import "./index.css";
import Dashboard from "./Components/StudentFolder/Dashboard";
import Gradesheet from "./Components/AdminFolder/Gradesheet";
import Enroll from "./Components/StudentFolder/Enroll";
import Material from "./Components/StudentFolder/Material";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },

  {
    path: "/login",
    element: <Login></Login>,
    children: [],
  },
  {
    path: "/register",
    element: <Register></Register>,
    children: [],
  },
  {
    path: "/admin",
    element: <Admin></Admin>,
    children: [
      {
        path: "studentdashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "gradesheet",
        element: <Gradesheet></Gradesheet>,
      },
      {
        path: "enroll",
        element: <Enroll></Enroll>,
      },
    ],
      {
        path: "material",
        element: <Material></Material>,
      },
    ]
  },
  // {
  //   path: "/studentdashboard",
  //   element: <Dashboard />,
  // },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
