import React from "react";

const getTwoPlayerGames = () => {
   return fetch("https://api.boardgameatlas.com/api/search?min_players=2&client_id=t0AVnrNPcW")
   .then(res => {
    if(res.ok) {
        return res.json()
    } else {
        throw new Error(res.status)
    }
   })
}

const getPartyGames = () => {
  return fetch("https://api.boardgameatlas.com/api/search?min_players=3&client_id=t0AVnrNPcW")
  .then(res=> {
    if(res.ok) {
      return res.json()
    } else {
      throw new Error(res.status)
    }
  })
}

const getSingleGames = () => {
  return fetch("https://api.boardgameatlas.com/api/search?min_players=1&client_id=t0AVnrNPcW")
  .then(res=> {
    if(res.ok) {
      return res.json()
    } else {
      throw new Error(res.status)
    }
  })
}



export { getTwoPlayerGames, getPartyGames, getSingleGames};