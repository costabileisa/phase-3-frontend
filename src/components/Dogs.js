import React from "react"
import { useHistory } from "react-router-dom"
import DogCollection from "./DogCollection"

function Home ({ dogs }) {
    const history = useHistory()

    function addDog() {
        history.push("/add-dog")
    }

    return (
        <div id="home">
            <DogCollection dogs={dogs} />
            <button id="add-dog-btn" onClick={addDog}>Add Dog</button>
        </div>
    )
}

export default Home;