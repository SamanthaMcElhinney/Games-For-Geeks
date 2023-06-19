import React, { useEffect, useState } from "react";
import Header from '../Header/Header.tsx'
import './App.css'
import HomePage from "../HomePage/HomePage.tsx";
import {getGames} from "../../Api-Calls.tsx";
import {Switch, Route} from 'react-router-dom'
import Games from "../Games/Games.tsx"
import GameDetails from "../GameDetails/GameDetails.tsx";
import Error from "../Error/Error.tsx";

interface AppProps {}

interface GameState {
  twoPlayers: Game[];
  error: string;
  groupPlayers: Game[]
  singlePlayer: Game[];
  favorites: Game[];
}

interface Game {
  id: string;
}

const App: React.FC<AppProps> = () => {
  const [twoPlayers, setTwoPlayers] = useState<Game[]>([]);
  const [error, setError] = useState<string>("");
  const [groupPlayers, setGroupPlayers] = useState<Game[]>([]);
  const [singlePlayer, setSinglePlayer] = useState<Game[]>([]);
  const [favorites, setFavorites] = useState<Game[]>([]);

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
      <h1 className="error-message">{`Sorry we are having issues with our server right now:${error.message}!`}</h1>
      <h1 className="error-message">{"Please try again"}</h1>
    </div>
    )
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
        <Route path="*" render={() => <Error />} />
      </Switch>
    </div>
  );
};

export default App;