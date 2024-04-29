import React from "react";
import ReactDOMClient from "react-dom/client";
import { Minafavoriteroption } from "./screens/Minafavoriteroption";

// Ensuring the app element is present before attempting to render the React app
if (!document.getElementById("app")) {
  console.error("The app element was not found. Ensure your HTML file has a div with id='app'.");
} else {
  const app = document.getElementById("app");
  const root = ReactDOMClient.createRoot(app);
  // Rendering the Minafavoriteroption component as the root of our application
  root.render(<Minafavoriteroption />);
}