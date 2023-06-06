import React, {useState} from 'react';
import './HomePage.css'

const HomePage = () => {

    const [selectedGameType, setSelectedGameType] = useState("")
    const handleGameTypeSelection = (gameType) => {
        setSelectedGameType(gameType)
    }
return (
    <section className='home-page-container'>
        <div className='slogan-container'>
            <h2 className='slogan'>Unlock the Fun: Select Your Board Game Adventure!</h2>
        </div>
            <div>
                <button onClick={() => handleGameTypeSelection('solo')}>Solo</button>
            </div>
    </section>

)
}

export default HomePage