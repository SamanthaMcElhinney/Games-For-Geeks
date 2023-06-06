import React, { useEffect, useState } from "react";
import Header from '../Header/Header'
import './App.css'
import HomePage from "../HomePage/HomePage";
import { getTwoPlayerGames } from '../../Api-Calls'
import {Router, Switch, Route} from 'react-router-dom'
import DuoGamesPage from "../DuoGamePage/DuoGame";

const App = () => {
  const[twoPlayers, setTwoPlayers] = useState([])
  const[error, setError] = useState('')
  const[selectedGameType, setSelectedGameType] = useState([])

  useEffect(()=> {
    getTwoPlayerGames()
    .then(data => setTwoPlayers(data.games))
  },[])

    console.log(twoPlayers, "twoplayers");
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path="/duo-games"
          render={() => <DuoGamesPage twoPlayers={twoPlayers}/>}
        />
      </Switch>
    </div>
  );
}

export default App;