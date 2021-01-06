import React from 'react'
import {ListGroup} from "react-bootstrap"

function NoteList(props){
    return(
        <ListGroup.Item action href="/sampleNote" key={props.index}> {props.noteName} </ListGroup.Item>
    )
}

export default NoteList