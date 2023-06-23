import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { SnackContextProvider } from "./context/snacks-context.jsx";

const router = createBrowserRouter([{ path: "/", element: <App /> }]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SnackContextProvider>
      <RouterProvider router={router} />
    </SnackContextProvider>
  </React.StrictMode>
);
