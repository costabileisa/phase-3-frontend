import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from "react-router-dom";

import DogCollection from "./DogCollection";
import DogForm from "./DogForm";
import DetailedDog from "./DetailedDog";

function App() {
    const [dogs, setDogs] = useState([])
    const history = useHistory()

    useEffect(() => {
        fetch("http://localhost:9292/dogs")
        .then(res => res.json())
        .then(data => setDogs(data))
    }, [])

    function handleAddDog(addDog) {
        let ids = []
        dogs.map(dog => ids = [...ids, dog.id])
        if (ids.includes(addDog.id)) {
            return alert("That dog already exists!")
        } else {
            setDogs([...dogs, addDog])
        }
    }

    function addDog() {
        history.push("/add_dog")
    }

    function deleteDog(dogToDel) {
        console.log(dogToDel)
        fetch(`http://localhost:9292/dogs/${dogToDel.id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(() => {
            const newDogs = dogs.filter(dog => dog.id !== dogToDel.id)
            console.log(newDogs)
            setDogs(newDogs)
        })
    }


    return (
        <div id="App">
            <Switch>
                <Route exact path="/">
                    <button id="add-dog-btn" onClick={addDog}>Add Dog</button>
                    <DogCollection dogs={dogs} />
                </Route>
                <Route path="/add_dog">
                    <DogForm handleAddDog={handleAddDog} />
                </Route>
                <Route path="/:id">
                    <DetailedDog deleteDog={deleteDog} />
                </Route>
            </Switch>
        </div>
    )
}

export default App;
