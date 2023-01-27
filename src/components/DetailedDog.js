import React from "react";
import { useHistory } from "react-router-dom";

function DetailedDog({ handleLike }) {
    const history = useHistory()
    const dog = history.location.state

    const { name, id, likes, img_url, img_description } = dog
    const { breed, size } = dog.breed

    function goBack() {
        history.push("/dogs")
    }

    function handleAdopt(e) {
        history.push(`/${id}/adopted`)
    }

    return(
        <div id="detailed-dog">
            <button style={{margin: "5px"}} onClick={handleAdopt}>Adopt Dog</button>
            <h1>{name}</h1>
            <p>Breed: {breed} | Adult Size: {size}</p> 
            <button id={id} onClick={handleLike}>❤️</button>
            <h4 id="likes-counter">Current Likes: {likes}</h4>
            <img className="dog-image" src={img_url} alt={img_description} />
            <button onClick={goBack} style={{float: "left"}}>Go Back</button> 
           
        </div>
    )
}

export default DetailedDog;