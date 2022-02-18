import React from "react";
import styled from "styled-components";

const StyledPhoto = styled.div`
    img {
        width: 50%
    }

    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.textColor}
`

const Photo = (props) => {
    return (
        <StyledPhoto className="photo-container">
            <h3>{props.photo.title}</h3>
            <p>{props.photo.date}</p>
            <img src={props.photo.url} alt="APOD" />
            <p>{props.photo.explanation}</p>
        </StyledPhoto>
    )
}

export default Photo;