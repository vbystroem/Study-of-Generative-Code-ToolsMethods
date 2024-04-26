/**
 * This code was generated by Builder.io.
 */
import * as React from "react";

function MyComponent() {
  return (
    <div className="flex flex-col items-center pb-4 max-w-xs text-2xl font-bold text-center text-black bg-zinc-100">
      <div className="flex gap-4 self-stretch py-2 pr-2 bg-white border-b border-black border-solid text-neutral-700">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec1cc0cbcf893b45a7c8f716945c83050335c636bb9f6cedcd89d11d91e36871?apiKey=5945b86f73654742be8e9fc146e85854&"
          className="shrink-0 w-14 aspect-square"
        />
        <div className="my-auto">Mina favoriter</div>
      </div>
      <div className="mt-6">Hur vill du lägga till aktiviteter?</div>
      <div className="flex flex-col mt-6 w-full text-lg max-w-[288px]">
        <div className="justify-center items-center px-16 py-5 bg-white rounded-xl border border-black border-solid shadow-sm">
          Välj från lista
        </div>
        <div className="justify-center px-14 py-5 mt-4 bg-white rounded-xl border border-black border-solid shadow-sm">
          Se en aktivitet i taget
        </div>
        <div className="justify-center px-11 py-5 mt-4 bg-white rounded-xl border border-black border-solid shadow-sm">
          Skapa en egen aktivitet
        </div>
      </div>
    </div>
  );
}

export default MyComponent; //Hjälper om den kör sig själv, lol