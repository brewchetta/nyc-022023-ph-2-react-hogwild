import React from 'react'

function HogFacts({ hog }) {

    return (
        <div>

            <p>{hog.specialty}</p>
            <p>{hog.weight}</p>
            <p>{hog.greased}</p>
            <p>{hog['highest medal achieved']}</p>

        </div>
    )

}

export default HogFacts