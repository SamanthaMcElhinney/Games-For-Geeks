import React from 'react'
import './GameDetails.css'
import { Game } from '../../types/Game';

interface GameDetailsProps{
  game: Game
}

export default function GameDetails({game}: GameDetailsProps) {
const youtubeSearchQuery = encodeURIComponent(`${game.name} How to Play`);
const learning = game.average_learning_complexity
const strategy = game.average_strategy_complexity
const imageUrl = game?.images?.large || "Sorry no image exists";
  return (
    <main>
      <div className="details-title-container">
        <h1 className="details-title">More Details about {game.name} ✨</h1>
      </div>
      <div className="game-details-container">
        <img className="details-image" src={imageUrl} />
        <div className="details-desc-container">
          <p
            className="details-description"
            dangerouslySetInnerHTML={{ __html: game.description }}
          ></p>
          <ul className="details-list">
            <li className="details-price">Price: ${game.price}</li>
            <li className="details-published">Year Published: {game.year_published}</li>
            <li className="details-players">
              Players required for the game: {game.min_players}-{" "}
              {game.max_players}
            </li>
            <li className="deets-container">
              {learning && (
                <span className="details-learning">
                  Average learning complexity: {learning.toFixed(2)}
                </span>
              )}
            </li>
            <li className="deets-container">
              {strategy && (
                <span className="details-strategy">
                  Average strategy complexity: {strategy.toFixed(2)}
                </span>
              )}
            </li>
          </ul>
          <p className="youtube-container">
            <a
              className="details-help-link"
              href={`https://www.youtube.com/results?search_query=${youtubeSearchQuery}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              🎥 Click This Link To Watch a Video For Help to Play the Game
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
