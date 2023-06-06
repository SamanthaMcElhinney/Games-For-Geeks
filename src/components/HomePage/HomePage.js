import React, {useState} from 'react';
import './HomePage.css'
import Dice1 from "../../assets/Dice1.png";
import Dice2 from "../../assets/Dice2.png";
import Dice3 from "../../assets/Dice3.png";
import { Link } from 'react-router-dom';
import DuoGamesPage from '../DuoGamePage/DuoGame';

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
        <img className="dice-1" src={Dice1} alt="single dice" />
      </section>
      <Link to="/duo-games" >
      <section className="duo" onClick={() => handleGameTypeSelection("duo")}>
        <h3 className="title-duo">Duo</h3>
        <img className="dice-2" src={Dice2} alt="single dice" />
      </section>
      </Link>
      <section
        className="party"
        onClick={() => handleGameTypeSelection("party")}
      >
        <h3 className="title-party">Party</h3>
        <img className="dice-3" src={Dice3} alt="single dice" />
      </section>
    </div>
  </section>
);
}

export default HomePage