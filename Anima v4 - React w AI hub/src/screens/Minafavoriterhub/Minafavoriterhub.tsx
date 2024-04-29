import React from "react";
import { AnimaButtonLarge } from "../../components/AnimaButtonLarge";
import { AnimaNav } from "../../components/AnimaNav";
import "./style.css";

export const Minafavoriterhub = (): JSX.Element => {
  // Handling potential errors with a basic try-catch structure
  try {
    return (
      <div className="minafavoriterhub">
        <AnimaNav className="anima-nav-instance" type="no-x" />
        <p className="heading-medium">Hur vill du lägga till aktiviteter?</p>
        <div className="button-container">
          {/* Explicitly passing props to AnimaButtonLarge for clarity and maintainability */}
          <AnimaButtonLarge className="anima-button-large-wide" text="" />
          <AnimaButtonLarge className="anima-button-large-wide" text="Se en aktivitet i taget" />
          <AnimaButtonLarge className="anima-button-large-wide" text="Skapa en egen aktivitet" />
        </div>
      </div>
    );
  } catch (error) {
    // Logging the error to the console for debugging purposes
    console.log("An error occurred in Minafavoriterhub component:", error);
    // Returning a fallback UI in case of an error
    return <div>Something went wrong. Please try again later.</div>;
  }
};