import React from 'react';
import DogCard from "./DogCard"

function DogCollection({ dogs }) {
    const dogsToList = dogs.map(dog => <DogCard key={dog.id} dog={dog} />)

    return (
        <div id="dog-collection">
            {dogsToList}
        </div>
    );
}

export default DogCollection;
