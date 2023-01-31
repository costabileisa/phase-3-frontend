import React from "react"
import BreedCard from "./BreedCard"

function Breeds({ breeds }) {
    return (
        <div className="breeds">
            {breeds.map(breed => breed.dogs.length > 0 ? <BreedCard key={breed.id} breed={breed} /> : null )}
        </div>
    )
}

export default Breeds