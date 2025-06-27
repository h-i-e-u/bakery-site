/*
-----
project: Bakery 
author: https://github.com/h-i-e-u
date: 2023-10-01
description: This is the main application file for a Bakery Management System built with React. It includes routing for customer and admin pages, layout components, and protected routes for admin functionalities.
version: 1.0.0
-----     
----
*/

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import "./i18n";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>
);
