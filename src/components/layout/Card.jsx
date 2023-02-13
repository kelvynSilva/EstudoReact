import "./Card.css";
import React from "react";

export default props => {
    const cardStyle = {
        backgroundColor: props.color,
        borderColor: props.color || "#F00",
    }
    return (
        <div className="Card" style={cardStyle}>

            <div className="Title">
                {props.titulo}
            </div>
            <div className="content">{props.children}</div>
        </div>
    )
}