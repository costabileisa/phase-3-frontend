import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import BreedForm from "./BreedForm"

function DogForm({ breeds, setBreeds, handleAddDog }) {
    const [dogData, setDogData] = useState({
        name: "",
        img_url: "",
        img_description: "",
        breed: ""
    })
    const history = useHistory();
    let breedForm = false;

    const values = breeds.map(breed => <option key={breed.id}>{breed.breed}</option>)

    function goBack() {
        history.push("/dogs")
    }

    function handleChange(e) {
        const { name, value } = e.target
        setDogData({...dogData, [name]: value})
    }

    if (dogData.breed === "Add Breed") {
        breedForm = true;
    }

    function handleSubmit(e) {
        e.preventDefault()

        fetch("http://localhost:9292/dogs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dogData)
        })
        .then(res => res.json())
        .then(data => handleAddDog(data))

        history.push("/dogs")
    }

    return(
        <div id="add-dog">
            <h1>Dog Form</h1>
            <form className="dog-form" onSubmit={handleSubmit}>
                {/* Name */}
                <label htmlFor="name">Name:</label>
                <input id="name" name="name" type="text" value={dogData.name} onChange={handleChange} />
                <br />
                {/* Image */}
                <label htmlFor="url">Image URL:</label>
                <input id="url" name="img_url" type="url" value={dogData.img_url} onChange={handleChange} />
                <br />
                {/* Description */}
                <label htmlFor="description">Image Description:</label>
                <input id="description" name="img_description" type="text" value={dogData.img_description} onChange={handleChange} />
                <br />
                {/* Breed */}
                <label htmlFor="breed">Breed:</label>
                <select id="breed" name="breed" value={dogData.breed} onChange={handleChange}>
                    <option>-</option>
                    {values}
                    <option>Add Breed</option>
                </select>
                <br />
                <input type="submit" />
            </form>
            {breedForm ? <BreedForm breeds={breeds} setBreeds={setBreeds} dogData={dogData} setDogData={setDogData} /> : null}
            <button onClick={goBack} style={{float: "left"}}>Go Back</button>
        </div>
    )
}

export default DogForm;