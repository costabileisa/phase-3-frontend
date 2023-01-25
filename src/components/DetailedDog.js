import React from "react";
import { useHistory, useParams } from "react-router-dom";

function DetailedDog({ findDog }) {
    const { id } = useParams()
    const history = useHistory()

    const dogInfo = findDog(id)

    function goBack() {
        history.push("/")
    }

    function handleLike() {
        const newLikes = likes++
        fetch(`http://localhost:9292/dogs/${id}`, {
            method: "PATCH",
            body: JSON.stringify(newLikes)
        })
        .then(res => res.json())
        .then(data => {
            setDogInfo({...dogInfo, likes: data.likes})
        })
    }

    function handleAdopt() {
        history.push(`/${id}/adopted`)
    }

    return(
        <div id="detailed-dog">
            <button style={{margin: "5px"}} onClick={handleAdopt}>Adopt Dog</button>
            <h1>{name}</h1>
            <p>Breed: {breed} | Adult Size: {size}</p>
            <button id={dogInfo.id} onClick={handleLike}>❤️</button>
            <h4 id="likes-counter">Current Likes: {likes}</h4>
            <img className="dog-image" src={image} alt={description} />
            <button onClick={goBack} style={{float: "left"}}>Go Back</button>
        </div>
    )
}

export default DetailedDog;