import React from 'react';
import DogCard from "./DogCard"

function Dogs({ dogs }) {
    const dogsToList = dogs.map(dog => <DogCard key={dog.id} dog={dog} />)

    return (
        <div id="dogs">
            {dogsToList}
        </div>
    );
}

export default Dogs;
