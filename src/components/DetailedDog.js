import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

function DetailedDog({ deleteDog }) {
    const { id } = useParams()
    const history = useHistory()
    const [dogInfo, setDogInfo] = useState({
        name: "",
        image: "",
        description: "",
        breed: "",
        size: "",
        likes: 0
    })
    let { name, image, description, breed, size, likes } = dogInfo;

    useEffect(() => {
        fetch(`http://localhost:9292/dogs/${id}`)
        .then(res => res.json())
        .then(dogData => {
            fetch(`http://localhost:9292/breeds/${dogData.breed_id}`)
            .then(res => res.json())
            .then(breedData => setDogInfo({
                id: dogData.id,
                name: dogData.name,
                image: dogData.img_url,
                description: dogData.img_description,
                breed: breedData.breed,
                size: breedData.size,
                likes: dogData.likes
            }))
        })
    }, [])

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
        deleteDog(id)
        history.push("/adopted")
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