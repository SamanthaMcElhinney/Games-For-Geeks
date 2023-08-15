import React, {useEffect, useState} from 'react';
import './HomePage.css'
import Dice1 from "../../assets/Dice1.png";
import Dice2 from "../../assets/Dice2.png";
import Dice3 from "../../assets/Dice3.png";
import { Link, useHistory } from 'react-router-dom';
import Form from '../Form/Form';
import { getGamesByName } from "../../Api-Calls";
import { Game } from '../../types/Game';

interface HomePageProps {
  setSearchedGames: (games: Game[]) => void;
}

const HomePage = ({ setSearchedGames }: HomePageProps) => {
  const history = useHistory();
  const [selectedGameType, setSelectedGameType] = useState<string>("");
  const handleGameTypeSelection = (gameType: string): void => {
    setSelectedGameType(gameType);
  };
  const [gameName, setGameName] = useState<string>("");

  const linkStyle: React.CSSProperties = {
    textDecoration: "none",
  };

  const handleSearch = (query: string) => {
    getGamesByName(query)
      .then((data) => {
        console.log(data);
           setSearchedGames(data.games);
        history.push("/ind-games");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <section className="home-page-container">
      <Form onSearch={handleSearch} />
      <div className="slogan-container">
        <h2 className="slogan">
          Unlock the Fun: Select Your Board Game Adventure!
        </h2>
      </div>
      <div className="game-type-container">
        <Link to="/single-game" style={linkStyle}>
          <section
            className="solo"
            onClick={() => handleGameTypeSelection("solo")}
          >
            <h3 className="title-solo">Solo</h3>
            <img className="dice-1" src={Dice1} alt="single dice" />
          </section>
        </Link>
        <Link to="/duo-games" style={linkStyle}>
          <section
            className="duo"
            onClick={() => handleGameTypeSelection("duo")}
          >
            <h3 className="title-duo">Duo</h3>
            <img className="dice-2" src={Dice2} alt="single dice" />
          </section>
        </Link>
        <Link to="/group-games" style={linkStyle}>
          <section
            className="party"
            onClick={() => handleGameTypeSelection("party")}
          >
            <h3 className="title-party">Party</h3>
            <img className="dice-3" src={Dice3} alt="single dice" />
          </section>
        </Link>
      </div>
      <div className="search-container"></div>
    </section>
  );
};

export default HomePage