import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const MinafavoriteroptionScreen = () => {
  return (
    <div className="minafavoriteroption-screen">
      <div className="minafavoriteroption-2">
        <div className="aktivitetsfrslag-2">
          <div className="overlap-4">
            <p className="p">Vill du lägga till denna aktivitet?</p>
            <div className="avsnitts-huvud-3">
              <Link to="/minafavoriterhub-v1">
                <img className="baktpil-2" alt="Baktpil" src="/img/bak-tpil.svg" />
              </Link>
              <div className="overlap-5">
                <div className="avsnitts-rubrik-3">Mina favoriter</div>
                <div className="stngkryss-x-wrapper">
                  <div className="img-wrapper">
                    <img className="plus-3" alt="Plus" src="/img/plus-1.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="button-3">
            <Link className="text-wrapper-2" to="/minafavoriteroption1-v1">
              Nej, inte den
            </Link>
          </button>
          <button className="button-4">
            <div className="knapp-4">Ja, lägg till</div>
          </button>
          <div className="aktivitet-2">
            <div className="overlap-group-3">
              <div className="rectangle-3" />
              <div className="aktivitetsnamn-2">Hoppa hopprep</div>
              <button className="button-5">
                <div className="knapp-5">Se beskrivning</div>
              </button>
              <div className="bildobjekt-xstort-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
