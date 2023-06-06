import React from "react";
import './DuoGame.css'

const DuoGamesPage = ({twoPlayers}) => {
 return (
   <div>
     <h1 className="Greeting">Welcome to games for two</h1>
     <div className="game-list">
       {twoPlayers.map((game) => (
         <div key={game.id}>
           <h2 className="name">Name:{game.name}</h2>
           <p className="desc">Description:{game.description}</p>
         </div>
       ))}
     </div>
   </div>
 );
}

export default DuoGamesPage