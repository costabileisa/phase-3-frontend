import React, { useState } from "react";

function BreedForm() {
    const [breedData, setBreedData] = useState({
        breed: "",
        size: ""
    })

    function handleSubmit(e) {
        e.preventDefault()
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