import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";

import DogForm from "./DogForm";
import DetailedDog from "./DetailedDog";
import Adoption from './Adoption';
import Dogs from "./DogCollection";
import NavBar from './Navbar';
import Home from "./Home";

function App() {
    const [dogs, setDogs] = useState(null)

    useEffect(() => {
        fetch("http://localhost:9292/dogs")
        .then(res => res.json())
        .then(data => setDogs(data))
    }, [])

    function handleAddDog(data) {
        setDogs(() => [...dogs, data])
    }

    function deleteDog(id) {
        fetch(`http://localhost:9292/dogs/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(() => {
            const newDogs = dogs.filter(dog => dog.id !== parseInt(id))
            setDogs(newDogs)
        })
    }

    function editDogLikes(data) {
        const newDogs = dogs.map(dog => dog.id === parseInt(data.id) ? data : dog)
        setDogs(newDogs)
    }

    return (
        <div id="App">
            <NavBar />
            <Switch>
                <Route exact path ="/">
                    <Home />
                </Route>
                <Route exact path="/dogs">
                    {dogs ? <Dogs dogs={dogs} /> : null}
                </Route>
                <Route path="/add-dog">
                    <DogForm handleAddDog={handleAddDog} />
                </Route>
                <Route path="/dogs/:id">
                    {dogs ? <DetailedDog dogs={dogs} likeDog={editDogLikes} /> : null}
                </Route>
                <Route path="/:id/adopted">
                    {dogs ? <Adoption adoptDog={deleteDog} /> : null}
                </Route>
            </Switch>
        </div>
    )
}

export default App;