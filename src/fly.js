import { useState, useEffect } from 'react'

const Fly = ({ switchState, flyCount, setFlyCount, deathCount, setDeathCount }) => {

    const [flySpeed, setFlySpeed] = useState();
    const [x, setX] = useState(300)
    const [y, setY] = useState(600)
    const [currentFrameCount, setCurrentFrameCount] = useState(0)
    const [nullState, setNull] = useState(false)
    const [flash, setFlash] = useState(false)
    const [transitionSpeed, setTransitionSpeed] = useState(3)


    useEffect(() => {
        newMove()
    }, [switchState])

    const setFlyBehaviour = () => {
        let flySpeedForState = Math.floor(Math.random() * 20)
        setFlySpeed(flySpeedForState)
    };

    const newMove = () => {
        clearInterval(move)
        setCurrentFrameCount(currentFrameCount + 1)
        setX((flySpeed * Math.sin(currentFrameCount)) + (Math.random() * 1000))
        setY((flySpeed * Math.cos(currentFrameCount)) + (Math.random() * 1300))
        setTransitionSpeed((Math.random() * 5) + 3)
        clearInterval(move)
    }

    let move

    useEffect(() => {
        setFlyBehaviour()
    }, [])

    const handleSetNull = (() => {
        setFlash(true)
        setNull(true)
        setFlyCount(flyCount - 1)
        setDeathCount(deathCount + 1)
    })
    if (!nullState) {

        return (
            <span onClick={handleSetNull} style={{
                position: 'absolute',
                transition: transitionSpeed + 's all',
                top: x,
                left: y,
                fontSize: '4rem',
                color: !flash ? 'black' : 'yellow',
                filter: flash && 'drop-shadow(0 0 1px yellow)',
                transform: flash && 'scale(1)'
            }}>
                .
            </span>
        )
    } else {
        return (
            <>
            </>
        )
    }
}

export default Fly;