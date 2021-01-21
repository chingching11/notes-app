import React from 'react'
import {ListGroup} from "react-bootstrap"
import { Link } from 'react-router-dom';
import Menu from './Menu'

const NoteList = (props) => {
    return(    
        <ListGroup.Item key={props.index}> 
            <Link to={{
                pathname:`/notes/${props.id}`,
                majorId: props.id
            }}> {props.noteName} </Link>  
            <Menu id={props.id} notRedirect={true}/>
        </ListGroup.Item>
    )
}

export default NoteList