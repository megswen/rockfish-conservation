import React from "react";
import "./style.css";

function SafeFishing(props) {
    return (
        <div className="card fishing-card">
            <div className="img-card" onClick={() => props.click(props.id)}>
                <img className="fishing" alt={props.name} src={props.image} />
            </div>
            <div className="fishcontent">
                <ul>
                    <li>
                        <strong>{props.name}</strong>
                    </li>
                    <li>
                        <em>{  props.status}</em>
                    </li>
                     <li>
                        <em>{props.description}</em>
                    </li> 
                </ul>
            </div>
        </div>
    );
}

export default SafeFishing;
