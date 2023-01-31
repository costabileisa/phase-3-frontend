import React from "react"

function Breeds({ breeds }) {
    return (
        <div className="breeds">
            <ul>
                {breeds.map(breed => <li key={breed.id}>{breed.breed}</li>)}
            </ul>
        </div>
    )
}

export default Breeds