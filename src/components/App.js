import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";

import DogForm from "./DogForm";
import DetailedDog from "./DetailedDog";
import Adoption from './Adoption';
import Dogs from "./Dogs";
import NavBar from './Navbar';

function App() {
    const [dogs, setDogs] = useState(null)
    const [breeds, setBreeds] = useState(null)

    useEffect(() => {
        fetch("http://localhost:9292/dogs")
        .then(res => res.json())
        .then(data => setDogs(data))
    }, [])
    useEffect(() => {
        fetch("http://localhost:9292/breeds")
        .then(res => res.json())
        .then(data => setBreeds(data))
     }, [])

    function handleAddDog(addDog) {
        const currentDogs = dogs.filter(dog => dog.id !== addDog.id)
        setDogs(() => [...currentDogs, addDog])
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
        const newDogs = dogs.map(dog => {
            if (dog.id == id) {
                const newLikes = ++dog.likes
                return {...dog, newLikes}
            } else {
                return dog
            }
        })
        setDogs(newDogs)
    }

    return (
        <div id="App">
            <NavBar />
            <Switch>
                <Route exact path ="/">
                    <h1>Home</h1>
                </Route>
                <Route exact path="/dogs">
                    {dogs ? <Dogs dogs={dogs} /> : null}
                </Route>
                <Route path="/add-dog">
                    {breeds ? <DogForm breeds={breeds} setBreeds={setBreeds} handleAddDog={handleAddDog} /> : null}
                </Route>
                <Route path="/dogs/:id">
                    {dogs ? <DetailedDog dogs={dogs} likeDog={editDogLikes} /> : null}
                </Route>
                <Route path="/:id/adopted">
                    {dogs ? <Adoption deleteDog={deleteDog} /> : null}
                </Route>
            </Switch>
        </div>
    )
}

export default App;