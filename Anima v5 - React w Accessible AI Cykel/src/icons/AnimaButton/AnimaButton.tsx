import React from "react";

interface Props {
  className: string;
}

export const AnimaButton = ({ className }: Props): JSX.Element => {
  const safeClassName = className || '';

  return (
    <svg
      className={`anima-button ${safeClassName}`}
      fill="none"
      height="56"
      viewBox="0 0 56 56"
      width="56"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="animaButtonTitle"
    >
      <title id="animaButtonTitle">Anima Button</title>
      <path
        className="path"
        d="M33.9826 41.1022C34.5913 41.6641 35.5403 41.6262 36.1022 41.0174C36.6641 40.4087 36.6262 39.4597 36.0174 38.8978L33.9826 41.1022ZM22 28L20.9826 26.8978C20.675 27.1818 20.5 27.5814 20.5 28C20.5 28.4186 20.675 28.8182 20.9826 29.1022L22 28ZM36.0174 17.1022C36.6262 16.5403 36.6641 15.5913 36.1022 14.9826C35.5403 14.3738 34.5913 14.3359 33.9826 14.8978L36.0174 17.1022ZM36.0174 38.8978L23.0174 26.8978L20.9826 29.1022L33.9826 41.1022L36.0174 38.8978ZM23.0174 29.1022L36.0174 17.1022L33.9826 14.8978L20.9826 26.8978L23.0174 29.1022Z"
        fill="black"
      />
    </svg>
  );
};