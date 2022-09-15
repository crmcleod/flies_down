import './App.css';
import { useState, useEffect } from 'react';
import Game from './Game';


function App() {

  const [game, startGame] = useState(false)
  const [deathCount, setDeathCount] = useState(0)

  const handleShoot = () => {
    document.querySelector('html').style.transition = '0.5s all'
    const element = document.querySelector('#gun')
    const flash = document.querySelector('#flash')
    flash.classList.remove('flash-animation')
    flash.classList.remove('animate')
    element.classList.remove('animate')
    void flash.offsetWidth
    void element.offsetWidth
    element.classList.add('animate')
    flash.classList.add('flash-animation')
    flash.classList.add('animate')
  };

  const handleStart = () => {
    setDeathCount(0)
    startGame(true);
  };

  return (
    <div className="App" onClick={handleShoot}>
      {
        game ?
          <Game 
            deathCount={deathCount}
            setDeathCount={setDeathCount}
            startGame={startGame}
          /> :
          <div id='start-screen'>
            <h1>
              Flies Down!
            </h1>
            <button id='start-button' onClick={handleStart}>
              Start Game
            </button>
          </div>
      }
    </div>
  );
}

export default App;
