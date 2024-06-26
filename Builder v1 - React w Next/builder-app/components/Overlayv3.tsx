/**
 * This code was generated by Builder.io.
 */
import * as React from "react";

function MyComponent() {
  return (
    <div className="flex flex-col justify-center max-w-[290px]">
      <div className="flex flex-col px-5 pt-px pb-3.5 w-full rounded-xl border border-black border-solid shadow-sm bg-zinc-300">
        <div className="flex flex-col justify-center items-end px-16 w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6f63020e264ed230bd40dd64864f0c15cfa007088349ad83b4af31818a7ca4c?apiKey=5945b86f73654742be8e9fc146e85854&"
            className="w-14 aspect-square"
          />
        </div>
        <div className="mt-8 text-3xl font-semibold text-center text-black">
          Aktiviteten har lagts till i dina favoriter
        </div>
        <div className="flex gap-4 justify-center mt-8 text-lg text-center text-black">
          <div className="justify-center p-4 bg-white rounded-xl border border-black border-solid shadow-sm">
            Stäng väljaren
          </div>
          <div className="justify-center p-4 bg-white rounded-xl border border-black border-solid shadow-sm">
            Se nästa aktivitet
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyComponent; //Hjälper om den kör sig själv, lol
