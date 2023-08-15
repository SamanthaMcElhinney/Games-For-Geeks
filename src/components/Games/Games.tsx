import React, { useState } from "react";
import "./Games.css";
import GameCard from "../GameCard/GameCard";
import favs from "../../assets/show-favs.png";
import { Link } from "react-router-dom";
import { Game } from "../../types/Game";

type GamesProps = {
  games: Game[];
  favoriteGames: (id: string) => void;
  unfavoriteGames: (id: string) => void;
  searchGames?: (query: string) => void;
};

const Games= ({ games, favoriteGames, unfavoriteGames, searchGames }: GamesProps) => {
  const [showFavorites, setShowFavorites] = useState(false);

  if (!games) {
    return <p className="error-message">Please hang tight while we find your games..</p>;
  }

  const cards = games.map((game) => {
    const ratingNum = game.average_user_rating;
    const imageUrl = game.images? game.images.small : 'Sorry no image'
    return (
      <GameCard
        key={game.id}
        title={game.name}
        image={imageUrl}
        rating={parseFloat(ratingNum.toFixed(2))}
        playTime={game.playtime}
        id={game.id}
        favoriteGames={favoriteGames}
        unfavoriteGames={unfavoriteGames}
      />
    );
  });

  const handleShowFavorites = () => {
    if (favoriteGames.length === 0) {
      return (
        <h1 className="error-message">
          Sorry, you don't have any favorites saved yet! Get to playing those
          games.
        </h1>
      );
    } else {
      setShowFavorites(!showFavorites);
    }
  };

  return (
    <Link to={"/favorites"} className="link-no-underline">
      <div>
        <nav className="nav-bar">
          <button onClick={handleShowFavorites} className="show-favs-button">
            <img className="show-favs-img" src={favs} alt="Favorite" />
          </button>
        </nav>
        <div className="card-container">{cards}</div>
      </div>
    </Link>
  );
};

export default Games;
