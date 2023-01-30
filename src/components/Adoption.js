import React from "react"
import { useHistory, useParams } from "react-router-dom"

function Adoption({ deleteDog }) {

    const history = useHistory()
    const name = history.location.state


    setTimeout(() => {
        history.push("/")
    }, 10000)

    return (
        <div id="adoption">
            <h1>Thank you for adopting {name}!</h1>
        </div>
    )
}

export default Adoption;