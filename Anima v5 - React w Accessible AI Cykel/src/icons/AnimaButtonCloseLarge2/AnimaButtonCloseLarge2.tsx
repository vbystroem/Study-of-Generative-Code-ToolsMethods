import React from "react";

interface Props {
  className: string;
}

export const AnimaButtonCloseLarge2 = ({ className }: Props): JSX.Element => {
  const appliedClassName = `anima-button-close-large-2 ${className || ""}`;

  return (
    <svg
      className={appliedClassName}
      fill="none"
      height="56"
      viewBox="0 0 56 56"
      width="56"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="closeButtonTitle"
    >
      <title id="closeButtonTitle">Close button</title>
      <mask className="mask" fill="white" id="path-1-inside-1_2283_235">
        <path
          className="path"
          d="M48 28C48 39.0457 39.0457 48 28 48C16.9543 48 8 39.0457 8 28C8 16.9543 16.9543 8 28 8C39.0457 8 48 16.9543 48 28Z"
        />
      </mask>
      <path
        className="path"
        d="M48 28C48 39.0457 39.0457 48 28 48C16.9543 48 8 39.0457 8 28C8 16.9543 16.9543 8 28 8C39.0457 8 48 16.9543 48 28Z"
        fill="#EFEFEF"
      />
      <path
        className="path"
        d="M19.2791 17.8659C18.8886 17.4754 18.2554 17.4754 17.8649 17.8659C17.4744 18.2565 17.4744 18.8896 17.8649 19.2802L19.2791 17.8659ZM36.7211 38.1363C37.1116 38.5269 37.7448 38.5269 38.1353 38.1363C38.5258 37.7458 38.5258 37.1126 38.1353 36.7221L36.7211 38.1363ZM17.8647 36.7202C17.4741 37.1107 17.4741 37.7438 17.8647 38.1344C18.2552 38.5249 18.8884 38.5249 19.2789 38.1344L17.8647 36.7202ZM38.1351 19.2782C38.5256 18.8877 38.5256 18.2545 38.1351 17.864C37.7445 17.4734 37.1114 17.4734 36.7208 17.864L38.1351 19.2782ZM17.8649 19.2802L36.7211 38.1363L38.1353 36.7221L19.2791 17.8659L17.8649 19.2802ZM19.2789 38.1344L38.1351 19.2782L36.7208 17.864L17.8647 36.7202L19.2789 38.1344ZM46 28C46 37.9411 37.9411 46 28 46V50C40.1503 50 50 40.1503 50 28H46ZM28 46C18.0589 46 10 37.9411 10 28H6C6 40.1503 15.8497 50 28 50V46ZM10 28C10 18.0589 18.0589 10 28 10V6C15.8497 6 6 15.8497 6 28H10ZM28 10C37.9411 10 46 18.0589 46 28H50C50 15.8497 40.1503 6 28 6V10Z"
        fill="black"
        mask="url(#path-1-inside-1_2283_235)"
      />
    </svg>
  );
};