import React from 'react'
import "./GameCard.css"
import { Link } from 'react-router-dom'

export default function GameCard({title, image, rating, id, playTime}) {
  return (
      <Link key={id} to={`/game/${id}`}>
      <div className='game-card'>
      <div className='title-container'>
        <h3 className='game-title'>{title}</h3>
      </div>
        <img className="game-image"src={image}/>
        <h4 className='game-rating'>Rating: {rating}/5 ⭐️</h4>
        <h4 className="game-playtime">Play time: {playTime} mins</h4>
    </div>
      </Link>
  )
}
