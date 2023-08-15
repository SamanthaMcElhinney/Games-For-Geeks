import React, { useEffect, useState } from "react";
import Header from '../Header/Header'
import './App.css'
import HomePage from "../HomePage/HomePage";
import {getGames, getGamesByName} from "../../Api-Calls";
import {Switch, Route} from 'react-router-dom'
import Games from "../Games/Games"
import GameDetails from "../GameDetails/GameDetails";
import Error from "../Error/Error";
import { Game } from "../../types/Game";
import Form from "../Form/Form";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [twoPlayers, setTwoPlayers] = useState<Game[]>([]);
  const [error, setError] = useState<string>("");
  const [groupPlayers, setGroupPlayers] = useState<Game[]>([]);
  const [singlePlayer, setSinglePlayer] = useState<Game[]>([]);
  const [favorites, setFavorites] = useState<Game[]>([]);
  const [searchedGames, setSearchedGames] = useState<Game[]>([]);

const searchGames = (query:string) => {
  getGamesByName(query)
  .then((data) => {
    setSearchedGames(data.games)
  })
  .catch((error) => {
    setError(error.message)
  })
}

useEffect(() => {
  getGames(1)
    .then((data) => {
      setSinglePlayer(data.games);
    })
    .catch((error) => {
      setError(error);
    });

  getGames(2)
    .then((data) => {
      setTwoPlayers(data.games);
    })
    .catch((error) => {
      setError(error);
    });

  getGames(3)
    .then((data) => {
      setGroupPlayers(data.games);
    })
    .catch((error) => {
      setError(error);
    });
}, []);


  const favoriteGames = (id:string) => {
    const game =
      twoPlayers.find((game) => game.id === id) ||
      groupPlayers.find((game) => game.id === id) ||
      singlePlayer.find((game) => game.id === id);
    if (game && !favorites.find(fav => fav.id === id)) {
      setFavorites([...favorites, game]);
    }
  };

  const unfavoriteGames = (id:string) => {
    const favoritesArray = favorites.filter(game => game.id !== id)
    setFavorites(favoritesArray)
  }

  if(error){
    return (
    <div>
      <Header />
      <h1 className="error-message">{`Sorry we are having issues with our server right now:${error}!`}</h1>
      <h1 className="error-message">{"Please try again"}</h1>
    </div>
    )
  }
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={() => <HomePage setSearchedGames={setSearchedGames} />}
        />
        <Route
          exact
          path="/favorites"
          render={() => (
            <Games
              games={favorites}
              favoriteGames={favoriteGames}
              unfavoriteGames={unfavoriteGames}
              searchGames={searchGames}
            />
          )}
        />
        <Route
          exact
          path="/game/:id"
          render={({ match }) => {
            const gameId = match.params.id;
            const game =
              singlePlayer.find((game) => game.id === gameId) ||
              groupPlayers.find((game) => game.id === gameId) ||
              twoPlayers.find((game) => game.id === gameId);

            if (!game) {
              return <div>Game not found!</div>;
            }

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
        <Route
          exact
          path="/ind-games"
          render={() => (
            <Games
              games={searchedGames}
              favoriteGames={favoriteGames}
              unfavoriteGames={unfavoriteGames}
            />
          )}
        />
        <Route path="*" render={() => <Error />} />
      </Switch>
    </div>
  );
};

export default App;