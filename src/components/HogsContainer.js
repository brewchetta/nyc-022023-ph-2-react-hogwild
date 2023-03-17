import React from 'react'
import HogTile from './HogTile'

function HogsContainer({ hogs, greased, sort }) {

    let sortedHogs

    if(sort === 'all') {
        sortedHogs = hogs
    } else if (sort === "name") {
        sortedHogs = [...hogs].sort( (hogA, hogB) => hogA.name > hogB.name )
    } else if (sort === "weight") {
        sortedHogs = [...hogs].sort( (hogA, hogB) => hogA.weight > hogB.weight )
    }

    console.log(sortedHogs)

    const filteredHogs = sortedHogs.filter( hog => hog.greased === true )

    const hogsArray = greased ? filteredHogs : sortedHogs

    const mappedHogs = hogsArray.map( hog => <HogTile key={hog.name} hog={hog} /> )

    return (
        <div>

            { mappedHogs }

        </div>
    )
}

export default HogsContainer