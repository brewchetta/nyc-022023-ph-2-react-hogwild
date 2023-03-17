import React, { useState } from 'react'
import HogFacts from './HogFacts'

function HogTile({ hog }) {

    const [displayFacts, setDisplayFacts] = useState(false)

    const handleClick = () => {
        setDisplayFacts( !displayFacts )
    }


    return (
        <div onClick={handleClick} >

            <h1>{ hog.name }</h1>

            {
                displayFacts ? <HogFacts hog={hog} /> : <img src={ hog.image } alt={ hog.name } />
            }


        </div>
    )
}

export default HogTile