import React from "react";
import "./style.css";

export const Minafavoriteroption = () => {
  const handleAddActivity = () => {
    try {
      console.log("Adding activity...");
      console.log("Activity added successfully.");
    } catch (error) {
      console.error("Failed to add activity:", error);
    }
  };

  const handleRejectActivity = () => {
    try {
      console.log("Rejecting activity...");
      console.log("Activity rejected successfully.");
    } catch (error) {
      console.error("Failed to reject activity:", error);
    }
  };

  return (
    <div className="minafavoriteroption">
      <div className="aktivitetsfrslag-wrapper">
        <div className="aktivitetsfrslag">
          <div className="overlap">
            <p className="aktuell-aktivitetsfr">Vill du lägga till denna aktivitet?</p>
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
          </div>
          <button className="button" onClick={handleRejectActivity}>
            <div className="text-wrapper">Nej, inte den</div>
          </button>
          <button className="knapp-wrapper" onClick={handleAddActivity}>
            <div className="text-wrapper">Ja, lägg till</div>
          </button>
          <div className="aktivitet">
            <div className="div">
              <div className="rectangle"></div>
              <div className="aktivitetsnamn">Hoppa hopprep</div>
              <button className="div-wrapper">
                <div className="knapp">Se beskrivning</div>
              </button>
              <div className="bildobjekt-xstort"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};