import React from 'react'
import { Card } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';

const NoteFolder = (props) => {
    let history = useHistory()

    const handleClick = () => {
        console.log('clicked')
        history.push( { pathname: `/folders/${props.id}`, folderId: props.id })
    }
    return (
        <Card style={{ width: '16rem' }} className="mx-auto glass-container folder-box" onClick={handleClick}>
            <Card.Body>{props.folderName}</Card.Body>
        </Card>
    )
}

export default NoteFolder
