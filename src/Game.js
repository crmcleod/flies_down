import react, { useState, useEffect } from 'react'
import Fly from './fly';
import FlyHud from './flyHUD.png'
import Gun from './gun.png'
import Death from './tombstone.png'

const Game = ({ deathCount, setDeathCount, startGame }) => {

    const [frameCountState, setFrameCount] = useState(0);
    const [switchState, setSwitch] = useState()
    const [flyCount, setFlyCount] = useState(1)

    const newMove = () => {
        setSwitch(!switchState)
        setFrameCount(frameCountState + 200)
        if (frameCountState % 2000 === 0 && flyCount < 500) {
            setFlyCount(flyCount + 5)
        }
        clearInterval(move)
    }
    let move = setInterval(newMove, 200)

    const restart = () => {
        startGame(false)
    }

    if (frameCountState <= 60000 && flyCount > 0) {

        return (
            <>
                <header className="App-header">
                    <div id='hud'>
                        <span>
                            <img id='fly-hud' src={FlyHud} />
                            <h2 id='fly-count'>{flyCount}</h2>
                        </span>
                        <span>
                            <img id='death-img' src={Death} />
                            <h2 id='death-count'>{deathCount}</h2>
                        </span>
                    </div>
                    {Array(flyCount).fill(<Fly deathCount={deathCount} setDeathCount={setDeathCount} switchState={switchState} flyCount={flyCount} setFlyCount={setFlyCount} />)}
                </header>
                <div id='gun-wrapper'>
                    <img id='gun' src={Gun} />
                    <div id='flash' />
                </div>
                <div id='timer'>
                    {parseInt(frameCountState / 1000)}
                </div>
            </>
        )
    }
    else if(
        flyCount === 0
    ){
        return(
            <div className='purple-screen'>
                <h1 className='smaller-font'>
                    Congratulations! You killed all the flies!
                </h1>
                <button id='start-button' onClick={restart}>
                    Try again?
                </button>
            </div>
        )
    }
    else {
        return (
            <div className='purple-screen'>
                <h1>
                    Game Over!
                </h1>
                <button id='start-button' onClick={restart}>
                    Try again?
                </button>
            </div>
        )
    }
}

export default Game;