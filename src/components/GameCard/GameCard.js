import React, {useState, useEffect} from 'react'
import "./GameCard.css"
import { Link, useLocation } from 'react-router-dom'

export default function GameCard({
  title,
  image,
  rating,
  id,
  playTime,
  favoriteGames,
  unfavoriteGames,
}) {
  const location = useLocation()
  const [isFavorite, setFavorite] = useState(false);

  const toggleFavorites = (event) => {
    event.preventDefault();
    if (isFavorite) {
     unfavoriteGames(id);
    } else {
      favoriteGames(id);
    }
    setFavorite(!isFavorite);
  };

  useEffect(()=> {
    setFavorite(location.pathname === '/favorites')
  },[location])

  return (
    <Link key={id} to={`/game/${id}`} className="link-no-underline">
      <div className="game-card">
        <div className="title-container">
          <h3 className="game-title">{title}</h3>
        </div>
        <img className="game-image" src={image} alt={title} />
        <button className="favorite-button" onClick={toggleFavorites}>
          {isFavorite ? "💜" : "♡"}
        </button>
        <h4 className="game-rating">Rating: {rating}/5 ⭐️</h4>
        <h4 className="game-playtime">Play time: {playTime} mins</h4>
      </div>
    </Link>
  );
}
