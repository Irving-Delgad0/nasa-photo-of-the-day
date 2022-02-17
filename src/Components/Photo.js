import React from "react";

const Photo = (props) => {
    return (
        <div className="photo-container">
            <h3>{props.photo.title}</h3>
            <p>{props.photo.date}</p>
            <img src={props.photo.url} alt="APOD" />
            <p>{props.photo.explanation}</p>
        </div>
    )
}

export default Photo;