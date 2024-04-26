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
    path: "/minafavoriterhub-v1",
    element: <Minafavoriterhub />,
  },
  {
    path: "/minafavoriteroption1-v1",
    element: <Minafavoriteroption />,
  },
  {
    path: "/minafavoriteroption2-v1",
    element: <MinafavoriteroptionScreen />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
