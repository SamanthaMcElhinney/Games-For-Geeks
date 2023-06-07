import React from "react";
import "./GroupGamePage.css";
import GameCard from "../GameCard/GameCard";

const GroupGamePage = ({ groupPlayers }) => {
  if (!groupPlayers) {
    return <p>Please hang tight while we find your games..</p>;
  }

  const cards = groupPlayers.map((game) => {
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

export default GroupGamePage;
