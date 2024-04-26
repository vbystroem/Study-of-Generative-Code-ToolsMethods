import React from "react";
import ReactDOMClient from "react-dom/client";
import { Minafavoriteroption } from "./screens/Minafavoriteroption";

// Initializing the main entry point of the application.
// This setup is essential for rendering the React component tree.
const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);

// Rendering the Minafavoriteroption component as the root of our application.
// This is the starting point of our React component hierarchy.
root.render(<Minafavoriteroption />);