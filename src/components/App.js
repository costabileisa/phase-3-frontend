import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from "react-router-dom";

import DogCollection from "./DogCollection";
import DogForm from "./DogForm";
import DetailedDog from "./DetailedDog";
import Adoption from './Adoption';

function App() {
    const [dogs, setDogs] = useState([])
    const history = useHistory()

    useEffect(() => {
        fetch("http://localhost:9292/dogs")
        .then(res => res.json())
        .then(data => setDogs(data))
    }, [])

    function ensureStateIsSet(state) {
        return new Promise(function (resolve, reject) {
            (function waitForState(){
                if (state) return resolve();
                setTimeout(waitForState, 30);
            })();
        });
    }

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
                <Route exact path="/">
                    <button id="add-dog-btn" onClick={addDog}>Add Dog</button>
                    <DogCollection dogs={dogs} />
                </Route>
                <Route path="/add_dog">
                    <DogForm handleAddDog={handleAddDog} />
                </Route>
                <Route exact path="/:id">
                    <DetailedDog findDog={findDog} />
                </Route>
                <Route path="/:id/adopted">
                    <Adoption deleteDog={deleteDog} findDog={findDog} />
                </Route>
            </Switch>
        </div>
    )
}

export default App;
