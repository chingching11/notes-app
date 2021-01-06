import React from "react"

function Note(props){
    return(
        <div>
            <h3>{props.title}</h3>
            <h6>{props.description}</h6>
            <p>{props.body}</p>
        </div>
    )
}

export default Note;