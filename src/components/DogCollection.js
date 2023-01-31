import React from "react"
import { useHistory } from "react-router-dom"
import Dogs from "./Dogs"

function DogCollection ({ dogs }) {
    const history = useHistory()

    function addDog() {
        history.push("/add-dog")
    }

    return (
        <div id="dog-collection">
            <Dogs dogs={dogs} />
            <button id="add-dog-btn" onClick={addDog}>Add Dog</button>
        </div>
    )
}

export default DogCollection;