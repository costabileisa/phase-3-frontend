import React from "react"
import { useHistory } from "react-router-dom"
import DogCollection from "./DogCollection"

function Home ({ dogs }) {
    const history = useHistory()

    function addDog() {
        history.push("/add_dog")
    }

    return (
        <div id="home">
            <button id="add-dog-btn" onClick={addDog}>Add Dog</button>
            <DogCollection dogs={dogs} />
        </div>
    )
}

export default Home;