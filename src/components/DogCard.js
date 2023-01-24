import React from "react";
import { useHistory } from "react-router-dom";

function DogCard({ dog }) {
    const history = useHistory();
    
    function handleMoreInfo(e) {
        const id = e.target.parentNode.id;
        history.push(`/${id}`)
    }

    return (
        <div id="card">
            <div className="card-details" id={dog.id}>
                <h2>{dog.name}</h2>
                <img src={dog.img_url} alt={dog.img_description} className="dog-avatar" />
                <button style={{margin: "5px"}} onClick={handleMoreInfo}>More Info</button>
            </div>
        </div>
    );
}

export default DogCard;