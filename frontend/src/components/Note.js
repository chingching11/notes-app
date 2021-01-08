import React from "react"
import ReactHtmlParser from 'react-html-parser'; //parse html element to react 

function Note(props){
    return(
        <div>
            <h3>{props.title}</h3>
            {ReactHtmlParser(props.body)}
        </div>
    )
}

export default Note;