import React, {useState, useEffect} from 'react'
import "./GameCard.css"
import { Link, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

interface GameCardProps {
  title: string;
  image:string;
  rating:number;
  id:string;
  playTime: number;
  favoriteGames: (id:string) => void;
  unfavoriteGames: (id:string) => void;
}

const GameCard: React.FC<GameCardProps> = ({
  title,
  image,
  rating,
  id,
  playTime,
  favoriteGames,
  unfavoriteGames,
})  => {
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
    <div className="main-section">
      <section className="game-card">
        <div className="link-no-underline">
          <Link key={id} to={`/game/${id}`} className="link-no-underline">
            <div className="title-container">
              <h3 className="game-title">{title}</h3>
            </div>
            <div className="game-container">
              <img className="game-image" src={image} alt={title} />
            </div>
          </Link>
          <button className="favorite-button" onClick={toggleFavorites}>
            {isFavorite ? "💜" : "♡"}
          </button>
          <h4 className="game-rating">Rating: {rating}/5 ⭐️</h4>
          <h4 className="game-playtime">Play time: {playTime} mins</h4>
        </div>
      </section>
    </div>
  );
}

GameCard.prototype = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  playTime: PropTypes.number.isRequired,
  favoriteGames: PropTypes.func.isRequired,
  unfavoriteGames: PropTypes.func.isRequired,
};

export default GameCard;
