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


    return (
        <div id="App">
            <Switch>
                <Route exact path="/">
                    <button onClick={addDog} style={{float: "right"}}>Add Dog</button>
                    <DogCollection dogs={dogs} />
                </Route>
                <Route path="/add_dog">
                    <DogForm handleAddDog={handleAddDog} />
                </Route>
                <Route path="/:id">
                    <DetailedDog />
                </Route>
            </Switch>
        </div>
    )
}

export default App;
