import React from 'react'
import './GameDetails.css'

export default function GameDetails({game}) {
const learning = game.average_learning_complexity
const strategy = game.average_strategy_complexity
  return (
    <main>
      <div className="details-title-container">
        <h1 className="details-title">More Details about {game.name} ✨</h1>
      </div>
      <div className="game-details-container">
        <img className="details-image" src={game.images.large} />
      </div>
      <div className="details-container">
        <div className="details-desc-container">
          <p
            className="details-description"
            dangerouslySetInnerHTML={{ __html: game.description }}
          ></p>
        </div>
        <ul>
          <li className="details-price">Price: ${game.price}</li>
          <li className="details-players">
            Players required for the game: {game.min_players}-{" "}
            {game.max_players}
          </li>
          <li className="deets-container">
            {learning && (
              <p className="details-learning">
                Average learning complexity: {learning.toFixed(2)}
              </p>
            )}
          </li>
          <li className="deets-container">
            {strategy && (
              <p className="details-strategy">
                Average strategy complexity: {strategy.toFixed(2)}
              </p>
            )}
          </li>
        </ul>
      </div>
    </main>
  );
}
