import React, { useState } from "react";

function BreedForm({ dogData, setDogData }) {
    const [breedData, setBreedData] = useState({
        breed: "",
        size: ""
    })

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
        .then(() => setDogData({...dogData, breed: breedData.breed}))
    }

    function handleChange(e) {
        setBreedData({...breedData, [e.target.name]: e.target.value})
    }

    return (
        <div id="add-breed">
            <h1>Breed Form</h1>
            <form className="breed-form" onSubmit={handleSubmit}>
                <input id="breed" name="breed" type="text" value={breedData.breed} onChange={handleChange} />
                <select id="size" name="size" value={breedData.size} onChange={handleChange}>
                    <option>-</option>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                </select>
                <input type="submit" />
            </form>
        </div>
    )
}

export default BreedForm