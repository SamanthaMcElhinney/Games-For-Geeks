const getGames = (num:number): Promise<any> => {
   return fetch(`https://api.boardgameatlas.com/api/search?min_players=${num}&client_id=t0AVnrNPcW`)
   .then(res => {
    if(res.ok) {
        return res.json()
    } else {
        throw new Error(res.status.toString())
    }
   })
}

const getGamesByName = (name:string): Promise<any> => {
 return fetch(
   `https://api.boardgameatlas.com/api/search?name=${name}&client_id=t0AVnrNPcW`)
   .then(res => {
    if(res.ok) {
        return res.json()
    } else {
        throw new Error(res.status.toString())
    }
   })
}

export { getGames, getGamesByName };