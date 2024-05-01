import React from "react";
import "./style.css";

export const Minafavoriterhub = (): JSX.Element => {
  try {
    return (
      <div className="minafavoriterhub">
        <div className="minafavoriterhub-v">
          <div className="avsnitts-huvud">
            <img className="baktpil" alt="Baktpil" src="/img/bak-tpil.svg" />
            <div className="overlap-group">
              <div className="avsnitts-rubrik">Mina favoriter</div>
              <div className="stngkryss">
                <div className="stngkryss-x">
                  <img className="plus" alt="Plus" src="/img/plus.png" />
                </div>
              </div>
            </div>
          </div>
          <p className="text-wrapper">Hur vill du lägga till aktiviteter?</p>
          <button className="button">
            <div className="div">
              <div className="rectangle" />
              <div className="knapp">Välj från lista</div>
            </div>
          </button>
          <div className="overlap-wrapper">
            <div className="div">
              <div className="rectangle" />
              <p className="knapp">Se en aktivitet i taget</p>
            </div>
          </div>
          <button className="overlap-group-wrapper">
            <div className="div">
              <div className="rectangle" />
              <div className="knapp">Skapa en egen aktivitet</div>
            </div>
          </button>
        </div>
      </div>
    );
  } catch (error) {
    console.log("An error occurred in Minafavoriterhub component:", error);
    return <div>Something went wrong. Please try again later.</div>;
  }
};