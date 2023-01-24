import React from "react"
import { useParams } from "react-router-dom";

function Adoption() {
    const params = useParams()
    console.log(params)
    return (
        <div id="adoption">
            <h1>Thank you for adopting {name}!</h1>
        </div>
    )
}

export default Adoption;