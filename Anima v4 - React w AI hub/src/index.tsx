import React from "react";
import ReactDOMClient from "react-dom/client";
import { Minafavoriterhub } from "./screens/Minafavoriterhub";

// Ensuring the app element exists before attempting to render the React app
// This adds a layer of fault tolerance in case the "app" element is missing from the HTML document
if (!document.getElementById("app")) {
  console.error("Failed to find the app element. Ensure your HTML includes an element with an ID of 'app'.");
} else {
  const app = document.getElementById("app");
  // Using ReactDOMClient.createRoot for React 18+ new root API
  // This is part of best practices for React 18 and onwards for better concurrency features
  const root = ReactDOMClient.createRoot(app);
  root.render(<Minafavoriterhub />);
}