import React from "react";
import { useHistory, useParams } from "react-router-dom";

function DetailedDog({ dogs, likeDog }) {
    const history = useHistory()
    const { id } = useParams()
    const dog = dogs.find(dog => dog.id == id)

    let { name, img_url, img_description, likes } = dog
    const { breed, size } = dog.breed

    function goBack() {
        history.push("/dogs")
    }

    function handleAdopt() {
        history.push(`/${id}/adopted`, name)
    }

    function handleLike() {
        const newLikes = ++dog.likes
        fetch(`http://localhost:9292/dogs/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({...dog, newLikes})
        })
        .then(res => res.json())
        .then(data => likeDog(data))

    }

    return(
        <div className="detailed-dog">
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