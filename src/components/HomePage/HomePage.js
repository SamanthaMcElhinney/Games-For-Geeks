import React, {useState} from 'react';
import './HomePage.css'

const HomePage = () => {

    const [selectedGameType, setSelectedGameType] = useState("")
    const handleGameTypeSelection = (gameType) => {
        setSelectedGameType(gameType)
    }
return (
  <section className="home-page-container">
    <div className="slogan-container">
      <h2 className="slogan">
        Unlock the Fun: Select Your Board Game Adventure!
      </h2>
    </div>
    <div className="game-type-container">
      <section className="solo" onClick={() => handleGameTypeSelection("solo")}>
        <h3 className="title-solo">Solo</h3>
      </section>
      <section className="duo" onClick={() => handleGameTypeSelection("duo")}>
        <h3 className="title-duo">Duo</h3>
      </section>
      <section
        className="party"
        onClick={() => handleGameTypeSelection("party")}
      >
        <h3 className="title-party">Party</h3>
      </section>
    </div>
  </section>
);
}

export default HomePage