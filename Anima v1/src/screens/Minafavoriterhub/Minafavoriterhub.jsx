import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Minafavoriterhub = () => {
  return (
    <div className="minafavoriterhub">
      <div className="minafavoriterhub-v">
        <div className="overlap">
          <p className="text-wrapper">Hur vill du lägga till aktiviteter?</p>
          <div className="avsnitts-huvud">
            <img className="baktpil" alt="Baktpil" src="/img/bak-tpil.svg" />
            <div className="overlap-group">
              <div className="avsnitts-rubrik">Mina favoriter</div>
              <div className="stngkryss">
                <div className="stngkryss-x">
                  <img className="plus" alt="Plus" src="/img/plus-1.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="button">
          <div className="div">
            <div className="rectangle" />
            <div className="knapp">Välj från lista</div>
          </div>
        </button>
        <Link className="overlap-wrapper" to="/minafavoriteroption1-v1">
          <div className="div">
            <div className="rectangle" />
            <p className="knapp">Se en aktivitet i taget</p>
          </div>
        </Link>
        <button className="overlap-group-wrapper">
          <div className="div">
            <div className="rectangle" />
            <div className="knapp">Skapa en egen aktivitet</div>
          </div>
        </button>
      </div>
    </div>
  );
};
