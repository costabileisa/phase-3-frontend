import React from "react";

function DogCard({ dog }) {
  return (
    <div id="card">
      <div id="card-details">
        <h2>{dog.name}</h2>
        <img src={dog.img_url} alt={dog.img_description} className="dog-avatar" />
        <button>Click Me</button>
      </div>
    </div>
  );
}

export default DogCard;