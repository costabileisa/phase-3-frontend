import React, { useState } from "react";

function BreedForm({ breeds, setBreeds, dogData, setDogData }) {
    const [breedData, setBreedData] = useState({
        breed: "",
        size: ""
    })

    function handleAddBreed(addBreed) {
        let ids = []
        breeds.map(breed => ids = [...ids, breed.id])
        if (ids.includes(addBreed.id)) {
            return alert("That breed already exists!")
        } else {
            setDogData({...dogData, breed: breedData.breed})
            setBreeds([...breeds, addBreed])
        }
    }

    function handleSubmit(e) {
        e.preventDefault()

        fetch("http://localhost:9292/breeds", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(breedData)
        })
        .then(res => res.json())
        .then(data => handleAddBreed(data))
    }

    function handleChange(e) {
        setBreedData({...breedData, [e.target.name]: e.target.value})
    }

    return (
        <div id="add-breed">
            <h1>Breed Form</h1>
            <form className="breed-form" onSubmit={handleSubmit}>
                <label for="breed">Breed Name:</label>
                <input id="breed" name="breed" type="text" value={breedData.breed} onChange={handleChange} />
                <br></br>
                <label for="size">Average Adult Size:</label>
                <select id="size" name="size" value={breedData.size} onChange={handleChange}>
                    <option>-</option>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                </select>
                <br></br>
                <input type="submit" />
            </form>
        </div>
    )
}

export default BreedForm