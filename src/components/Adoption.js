import React, { useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"

function Adoption({ adoptDog }) {

    const { id } = useParams()
    const history = useHistory()
    const name = history.location.state

    useEffect(() => {
        adoptDog(id)
        
        setTimeout(() => {
            history.push("/dogs")
        }, 5000)
    }, [])

    return (
        <div id="adoption">
            <h1>Thank you for adopting {name}!</h1>
        </div>
    )
}

export default Adoption;