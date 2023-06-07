import React from "react";
import "./DuoGame.css";
import GameCard from "../GameCard/GameCard";

const DuoGamesPage = ({ twoPlayers}) => { 
  if (!twoPlayers) {
    return <p>Please hang tight while we find your games..</p>;
  }

  const cards = twoPlayers.map((game) => {
    const ratingNum = game.average_user_rating;
    return (
      <GameCard
        key={game.id}
        title={game.name}
        image={game.images.small}
        rating={ratingNum.toFixed(2)}
        playTime={game.playtime}
        id={game.id}
      />
    );
  });

  return <div className="card-container">{cards}</div>;
};

export default DuoGamesPage;
