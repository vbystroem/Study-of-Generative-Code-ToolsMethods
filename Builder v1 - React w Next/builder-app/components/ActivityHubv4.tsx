/**
 * This code was generated by Builder.io.
 */
import * as React from "react";

interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <div className="justify-center items-center px-16 py-5 bg-white rounded-xl border border-black border-solid shadow-sm">
      {children}
    </div>
  );
};

const MyComponent: React.FC = () => {
  const buttonData = [
    "Välj från lista",
    "Se en aktivitet i taget",
    "Skapa en egen aktivitet",
  ];

  return (
    <div className="flex flex-col items-center pb-4 max-w-xs text-2xl font-bold text-center text-black bg-zinc-100">
      <header className="flex gap-4 self-stretch py-2 pr-2 bg-white border-b border-black border-solid text-neutral-700">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0092a212cf31bdbae1f0a5a93d16583b31530c8f66c5aa2aa0a9cb72c02ba3c?apiKey=4335baeda03e4ce8ad5618062684a1a3&"
          alt="Favorite activities"
          className="shrink-0 w-14 aspect-square"
        />
        <h1 className="my-auto">Mina favoriter</h1>
      </header>
      <p className="mt-6">Hur vill du lägga till aktiviteter?</p>
      <div className="flex flex-col mt-6 w-full text-lg max-w-[288px]">
        {buttonData.map((buttonText, index) => (
          <Button key={index}>
            {buttonText}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default MyComponent;