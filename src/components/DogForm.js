import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function DogForm({ handleDogUpdate }) {
    const [dogData, setDogData] = useState({
        name: "",
        img_url: "",
        img_description: "",
        breed: ""
    })
    const [breeds, setBreeds] = useState([])
    const history = useHistory();

    let breedForm = false;

    useEffect(() => {
        fetch("http://localhost:9292/breeds")
        .then(res => res.json())
        .then(data => setBreeds(data))
    }, [])

    const values = breeds.map(breed => <option key={breed.id}>{breed.breed}</option>)

    function goBack() {
        history.push("/")
    }

    function handleChange(e) {
        setDogData({...dogData, [e.target.name]: e.target.value})
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
        .then(data => console.log(data))
    }

    return(
        <div id="add-dog">
            <form className="dog-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input id="name" name="name" type="text" value={dogData.name} onChange={handleChange} />
                <label htmlFor="url">Image URL:</label>
                <input id="url" name="img_url" type="url" value={dogData.img_url} onChange={handleChange} />
                <label htmlFor="description">Image Description:</label>
                <input id="description" name="img_description" type="text" value={dogData.img_description} onChange={handleChange} />
                <label htmlFor="breed">Breed:</label>
                <select id="breed" name="breed" value={dogData.breed} onChange={handleChange}>
                    <option>-</option>
                    {values}
                    <option>Add Breed</option>
                </select>
                <br />
                <input type="submit" />
            </form>
            {breedForm ? <h1>HI</h1> : null}
            <button onClick={goBack} style={{float: "left"}}>Go Back</button>
        </div>
    )
}

export default DogForm;