import React from 'react'
import {ListGroup} from "react-bootstrap"
import { useHistory } from 'react-router-dom';
import Menu from './Menu'

const NoteList = (props) => {
    let history = useHistory()
    
    const handleClick = () => {
        history.push( { pathname: `/notes/${props.id}`})
    }
    return(    
        <ListGroup.Item key={props.index}> 
            <div style={{width: '95%', float: 'left'}} onClick={handleClick}>{props.noteName}</div>
            <Menu id={props.id} notRedirect={true}/>
        </ListGroup.Item>
    )
}

export default NoteList