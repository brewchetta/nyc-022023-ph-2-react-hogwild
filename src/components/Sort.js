import React from 'react'

function Sort({ handleChange }) {
    
    return (
        <select onChange={handleChange}>
            <option value="all">Sort Pigs</option>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
        </select>
    )

}

export default Sort