import React from "react";
import "./style.css";

export const Minafavoriteroption = () => {
  // Handling button click events to demonstrate fault tolerant error handling
  const handleButtonClick = (actionType) => {
    try {
      // Simulate fetching data or any other logic here
      console.log(`Button clicked for action: ${actionType}`);
      // Example: Fetch data from an API
      // Remember to insert your API key in the 'Authorization' header
      // fetch('https://example.com/api/action', {
      //   method: 'POST',
      //   headers: {
      //     'Authorization': 'Bearer YOUR_API_KEY_HERE',
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify({ action: actionType })
      // })
      // .then(response => response.json())
      // .then(data => console.log(data))
      // .catch(error => console.error('Error:', error));
    } catch (error) {
      console.error(`Error handling ${actionType} action: `, error);
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
                <div className="stngkryss" onClick={() => handleButtonClick('close')}>
                  <div className="stngkryss-x">
                    <img className="plus" alt="Plus" src="/img/plus.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="button" onClick={() => handleButtonClick('deny')}>
            <div className="knapp">Nej, inte den</div>
          </button>
          <button className="knapp-wrapper" onClick={() => handleButtonClick('accept')}>
            <div className="knapp">Ja, lägg till</div>
          </button>
          <div className="aktivitet">
            <div className="div">
              <div className="rectangle" />
              <div className="aktivitetsnamn">Cykla</div>
              <button className="div-wrapper" onClick={() => handleButtonClick('seeDescription')}>
                <div className="text-wrapper">Se beskrivning</div>
              </button>
              <div className="bildobjekt-xstort" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
