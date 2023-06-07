import React from 'react'
import './GameDetails.css'

export default function GameDetails({game}) {
console.log(game, "line 5")
const learning = game.average_learning_complexity
const strategy = game.average_strategy_complexity;
  return (
    <div className="game-details-container">
      <h1 className="details-title">More Details about {game.name} ✨</h1>
      <img src={game.images.large}/>
      <p dangerouslySetInnerHTML={{ __html: game.description }}></p>
      <p>Price: ${game.price}</p>
      <p>
        Players required for the game: {game.min_players}- {game.max_players}
      </p>
      <p>Average learning complexity: {learning.toFixed(2)}</p>
      <p>Average strategy complexity: {strategy.toFixed(2)}</p>
    </div>
  );
}
