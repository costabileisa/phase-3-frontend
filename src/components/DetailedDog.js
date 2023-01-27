import React from "react";
import { useHistory, useParams } from "react-router-dom";

function DetailedDog({ findDog, handleLike }) {
    const { id } = useParams()
    const history = useHistory()

    const dogInfo = findDog(id)
    const { name, img_url, img_description, likes } = dogInfo;

    function goBack() {
        history.push("/")
    }

    function handleAdopt() {
        history.push(`/${id}/adopted`)
    }

    return(
        <div id="detailed-dog">
            <button style={{margin: "5px"}} onClick={handleAdopt}>Adopt Dog</button>
            <h1>{name}</h1>
            {/* <p>Breed: {breed} | Adult Size: {size}</p> */}
            <button id={id} onClick={handleLike}>❤️</button>
            <h4 id="likes-counter">Current Likes: {likes}</h4>
            <img className="dog-image" src={img_url} alt={img_description} />
            <button onClick={goBack} style={{float: "left"}}>Go Back</button>
        </div>
    )
}

export default DetailedDog;