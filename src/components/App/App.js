import React, { useEffect, useState } from "react";
import Header from '../Header/Header'
import './App.css'
import HomePage from "../HomePage/HomePage";
import {
  getTwoPlayerGames,
  getPartyGames,
  getSingleGames,
} from "../../Api-Calls";
import {Router, Switch, Route} from 'react-router-dom'
import DuoGamesPage from "../DuoGamePage/DuoGame";
import GroupGamePage from "../GroupGamePage/GroupGamePage";
import SingleGamePage from "../SingleGamePage/SingleGamePage";
import GameDetails from "../GameDetails/GameDetails";

const App = () => {
  const [twoPlayers, setTwoPlayers] = useState([]);
  const [error, setError] = useState("");
  const [groupPlayers, setGroupPlayers] = useState([]);
  const [singlePlayer, setSinglePlayer] = useState([]);

  useEffect(() => {
    getTwoPlayerGames().then((data) => {
      setTwoPlayers(data.games);
    });
  }, []);

  useEffect(() => {
    getPartyGames().then((data) => setGroupPlayers(data.games));
  }, []);

  useEffect(() => {
    getSingleGames().then((data) => setSinglePlayer(data.games));
  }, []);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path="/game/:id"
          render={({ match }) => {
            const gameId = match.params.id;
            const game =
              twoPlayers.find((game) => game.id === gameId) ||
              groupPlayers.find((game) => game.id === gameId) ||
              singlePlayer.find((game) => game.id === gameId);
            return <GameDetails game={game} />;
          }}
        />
        <Route
          exact
          path="/duo-games"
          render={() => <DuoGamesPage twoPlayers={twoPlayers} />}
        />
        <Route
          exact
          path="/group-games"
          render={() => <GroupGamePage groupPlayers={groupPlayers} />}
        />
        <Route
          exact
          path="/single-game"
          render={() => <SingleGamePage singlePlayer={singlePlayer} />}
        />
      </Switch>
    </div>
  );
};

export default App;