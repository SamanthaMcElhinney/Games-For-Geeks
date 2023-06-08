import React, { useEffect, useState } from "react";
import Header from '../Header/Header'
import './App.css'
import HomePage from "../HomePage/HomePage";
import {getGames} from "../../Api-Calls";
import {Switch, Route} from 'react-router-dom'
import Games from "../Games/Games"
import GameDetails from "../GameDetails/GameDetails";

const App = () => {
  const [twoPlayers, setTwoPlayers] = useState([]);
  const [error, setError] = useState("");
  const [groupPlayers, setGroupPlayers] = useState([]);
  const [singlePlayer, setSinglePlayer] = useState([]);
  const [favorites, setFavorites] = useState([]);

useEffect(() => {
  getGames(1).then((data) => {
    setSinglePlayer(data.games);
  });
  getGames(2).then((data) => {
    setTwoPlayers(data.games);
  });
  getGames(3).then((data) => {
    setGroupPlayers(data.games);
  });
}, []);

  const favoriteGames = (id) => {
    const game =
      twoPlayers.find((game) => game.id === id) ||
      groupPlayers.find((game) => game.id === id) ||
      singlePlayer.find((game) => game.id === id);
    if (game && !favorites.find(fav => fav.id === id)) {
      setFavorites([...favorites, game]);
    }
    console.log(favorites, "favorites line 37")
  };

  const unfavoriteGames = (id) => {
    const favoritesArray = favorites.filter(game => game.id !== id)
    setFavorites(favoritesArray)
    console.log(favorites, "line 43")
  }

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path="/favorites"
          render={() => (
            <Games
              games={favorites}
              favoriteGames={favoriteGames}
              unfavoriteGames={unfavoriteGames}
            />
          )}
        />
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
          path="/single-game"
          render={() => (
            <Games
              games={singlePlayer}
              favoriteGames={favoriteGames}
              unfavoriteGames={unfavoriteGames}
            />
          )}
        />
        <Route
          exact
          path="/duo-games"
          render={() => (
            <Games
              games={twoPlayers}
              favoriteGames={favoriteGames}
              unfavoriteGames={unfavoriteGames}
            />
          )}
        />
        <Route
          exact
          path="/group-games"
          render={() => (
            <Games
              games={groupPlayers}
              favoriteGames={favoriteGames}
              unfavoriteGames={unfavoriteGames}
            />
          )}
        />
      </Switch>
    </div>
  );
};

export default App;