import React from "react"
import { useHistory, useParams } from "react-router-dom";

function Adoption({ deleteDog, findDog }) {
    const { id } = useParams()
    const history = useHistory()

    let foundDog = findDog(id)
    if (!foundDog) {
        foundDog = { name: "" }
    }

    deleteDog(id)

    setTimeout(() => {
        history.push("/")
    }, 10000)

    return (
        <div id="adoption">
            <h1>Thank you for adopting {foundDog.name}!</h1>
        </div>
    )
}

export default Adoption;