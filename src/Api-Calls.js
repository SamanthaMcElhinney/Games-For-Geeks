const getGames = (num) => {
   return fetch(`https://api.boardgameatlas.com/api/search?min_players=${num}&client_id=t0AVnrNPcW`)
   .then(res => {
    if(res.ok) {
        return res.json()
    } else {
        throw new Error(res.status)
    }
   })
}


export { getGames};