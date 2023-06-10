import React, { useState } from "react";
import "./Games.css";
import GameCard from "../GameCard/GameCard";
import favs from "../../assets/show-favs.png";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Games= ({ games, favoriteGames, unfavoriteGames }) => {
  const [showFavorites, setShowFavorites] = useState(false);

  if (!games) {
    return <p className="error-message">Please hang tight while we find your games..</p>;
  }

  const cards = games.map((game) => {
    const ratingNum = game.average_user_rating;
    return (
      <GameCard
        key={game.id}
        title={game.name}
        image={game.images.small}
        rating={ratingNum.toFixed(2)}
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

Games.propTypes = {
  games: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      image: PropTypes.string,
      rating: PropTypes.number,
      id: PropTypes.string,
      playTime: PropTypes.string
    })
  ),
  favoriteGames: PropTypes.func.isRequired,
  unfavoriteGames: PropTypes.func.isRequired,
};

export default Games;
