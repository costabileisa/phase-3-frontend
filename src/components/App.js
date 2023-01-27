import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";

import DogForm from "./DogForm";
import DetailedDog from "./DetailedDog";
import Adoption from './Adoption';
import Dogs from "./Dogs";

function App() {
    const [dogs, setDogs] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/dogs")
        .then(res => res.json())
        .then(data => setDogs(data))
    }, [])

    function handleAddDog(addDog) {
        // let ids = []
        // dogs.forEach(obj => obj.map(dog => ids = [...ids, dog.id])
        // if (ids.includes(addDog.id)) {
        //     return alert("That dog already exists!")
        // } else {
        //     setDogs([...dogs, addDog])
        // }
    }

    function deleteDog(id) {
        fetch(`http://localhost:9292/dogs/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(() => {
            const newDogs = dogs.filter(dog => dog.id !== id)
            setDogs(newDogs)
        })
    }

    function editDogLikes(id) {
        console.log(id)
    }

    function findDog(id) {
        if (dogs) {
            return dogs.find(dogObj => dogObj.id == id)
        }
        else {
            findDog(id)
        }
    }

    return (
        <div id="App">
            <Switch>
                <Route exact path ="/">
                    <h1>Home</h1>
                </Route>
                <Route exact path="/dogs">
                    <Dogs dogs={dogs} />
                </Route>
                <Route path="/add_dog">
                    <DogForm dogs={dogs} handleAddDog={handleAddDog} />
                </Route>
                <Route path="/dogs/:id">
                    <DetailedDog findDog={findDog} likeDog={editDogLikes} />
                </Route>
                <Route path="/:id/adopted">
                    <Adoption deleteDog={deleteDog} findDog={findDog} />
                </Route>
            </Switch>
        </div>
    )
}

export default App;
