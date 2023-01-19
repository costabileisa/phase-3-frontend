import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

function DetailedDog() {
    const { id } = useParams()
    const history = useHistory()
    const [dogInfo, setDogInfo] = useState({
        name: "",
        image: "",
        description: "",
        breed: "",
        size: ""
    })
    const { name, image, description, breed, size } = dogInfo;

    useEffect(() => {
        fetch(`http://localhost:9292/dogs/${id}`)
        .then(res => res.json())
        .then(dogData => {
            fetch(`http://localhost:9292/breeds/${dogData.breed_id}`)
            .then(res => res.json())
            .then(breedData => setDogInfo({
                name: dogData.name,
                image: dogData.img_url,
                description: dogData.img_description,
                breed: breedData.breed,
                size: breedData.size
            }))
        })
    }, [])

    function goBack() {
        history.push("/")
    }

    return(
        <div id="detailed-dog">
            <h1>{name}</h1>
            <p>Breed: {breed} | Adult Size: {size}</p>
            <img className="dog-image" src={image} alt={description} />
            <button onClick={goBack} style={{float: "left"}}>Go Back</button>
        </div>
    )
}

export default DetailedDog;