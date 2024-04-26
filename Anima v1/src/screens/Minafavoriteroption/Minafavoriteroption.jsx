import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Minafavoriteroption = () => {
  return (
    <div className="minafavoriteroption">
      <div className="aktivitetsfrslag-wrapper">
        <div className="aktivitetsfrslag">
          <div className="overlap-2">
            <p className="aktuell-aktivitetsfr">Vill du lägga till denna aktivitet?</p>
            <div className="avsnitts-huvud-2">
              <Link to="/minafavoriterhub-v1">
                <img className="img" alt="Baktpil" src="/img/bak-tpil.svg" />
              </Link>
              <div className="overlap-3">
                <div className="avsnitts-rubrik-2">Mina favoriter</div>
                <div className="stngkryss-wrapper">
                  <div className="plus-wrapper">
                    <img className="plus-2" alt="Plus" src="/img/plus-1.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link to="/minafavoriteroption2-v1">
            <button className="knapp-wrapper">
              <div className="knapp-2">Nej, inte den</div>
            </button>
          </Link>
          <button className="div-wrapper">
            <div className="knapp-2">Ja, lägg till</div>
          </button>
          <div className="aktivitet">
            <div className="overlap-group-2">
              <div className="rectangle-2" />
              <div className="aktivitetsnamn">Cykla</div>
              <button className="button-2">
                <div className="knapp-3">Se beskrivning</div>
              </button>
              <div className="bildobjekt-xstort" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
