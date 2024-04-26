import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Minafavoriterhub } from "./screens/Minafavoriterhub";
import { Minafavoriteroption } from "./screens/Minafavoriteroption";
import { MinafavoriteroptionScreen } from "./screens/MinafavoriteroptionScreen";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Minafavoriterhub />,
  },
  {
    path: "/minafavoriterhub-v3",
    element: <Minafavoriterhub />,
  },
  {
    path: "/minafavoriteroption2-v3",
    element: <Minafavoriteroption />,
  },
  {
    path: "/minafavoriteroption1-v3",
    element: <MinafavoriteroptionScreen />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
