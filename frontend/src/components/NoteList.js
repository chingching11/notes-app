import React from 'react'
import {ListGroup} from "react-bootstrap"
import { Link } from 'react-router-dom';

function NoteList(props){
    return(
        <Link to={{
            pathname:`/notes/${props.id}`,
            majorId: props.id
        }}>
            <ListGroup.Item key={props.index}> {props.noteName} </ListGroup.Item>
        </Link>
    )
}

export default NoteList