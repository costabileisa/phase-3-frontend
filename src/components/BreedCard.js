import React from "react"

function BreedCard({ breed }) {
    return(
        <div className="breed-card card">
            <div className="card-details" id={breed.id}>
                <h2>{breed.breed}</h2>
                <p>Some dogs belonging to this breed:</p>
                <ul>
                    {breed.dogs.slice(0, 10).map(dog => <li key={dog.id}>{dog.name} | ❤️ {dog.likes}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default BreedCard