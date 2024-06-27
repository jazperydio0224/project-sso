import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme.js";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Container } from "@mui/material";

// routes
import Login from "./routes/Login.jsx";
import Home from "./routes/Home.jsx";
import ErrorPage from "./ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Container>
        <RouterProvider router={router} />
      </Container>
    </ThemeProvider>
  </React.StrictMode>
);
