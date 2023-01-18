import { useEffect, useState } from 'react';
import DogCard from "./DogCard"

function DogCollection() {
    const [dogs, setDogs] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/dogs")
        .then(res => res.json())
        .then(data => setDogs(data))
    }, [])

    const dogsToList = dogs.map(dog => <DogCard dog={dog} />)

    return (
        <div id="dog-collection">
            {dogsToList}
        </div>
    );
}

export default DogCollection;
