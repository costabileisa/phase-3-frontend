import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from "react-router-dom";

import DogCollection from "./DogCollection";
import DogForm from "./DogForm";

function App() {
    const [dogs, setDogs] = useState([])
    const history = useHistory()

    useEffect(() => {
        fetch("http://localhost:9292/dogs")
        .then(res => res.json())
        .then(data => setDogs(data))
    }, [])

    function handleAddDog(dog) {
        setDogs([...dogs, dog])
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
            </Switch>
        </div>
    )
}

export default App;
