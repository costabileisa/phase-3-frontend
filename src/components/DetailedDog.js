import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function DetailedDog() {
    const { id } = useParams()
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

    return(
        <div id="detailed-dog">
            <h1>{name}</h1>
            <p>Breed: {breed} | Size: {size}</p>
            <img src={image} alt={description} />
        </div>
    )
}

export default DetailedDog;