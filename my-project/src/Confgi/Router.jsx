import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";


import Home from "../Pages/Home";
import Login from "../Pages/Login";
import { SingUp } from "../Pages/SingUp";
import Last from "../Pages/Last";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route >

      <Route path="/" element={<Home />}/>
      <Route path="login" element={<Login />} />
      <Route path="singup" element={<SingUp />} />
      <Route path="last" element={<Last />} />
    </Route>
  )
);

export const Router_App = () => {
  return <RouterProvider router={router} />;
};