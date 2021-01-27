import React from "react"
import { Container, ListGroup } from "react-bootstrap";
import NoteList from "../components/NoteList"
import axios from "axios"
import { useEffect, useState } from "react";
import Btn from "../components/Btn"
import { useHistory } from 'react-router-dom';

const ListOfSubjects = (props) => {
    let history = useHistory()
    const [notes, setNotes] = useState([])
    const [folderName, setFolderName] = useState("")
    useEffect(() => {
        // get all majors from backend api
        const getNotesInfo = async () => {
            try {
                const response = await axios (`http://localhost:8000/folders/${props.match.params.folderId}`)
                setNotes(response.data.notes)  
                setFolderName(response.data.folderName)   
            }catch (err) {
                console.log(err);
                history.push(`/*`)
            }
        }
        getNotesInfo();
    }, [props.match.params.folderId, history])

    let listNotes;
    if(notes){
        listNotes = notes.map((n, index) => {
            return (
                <NoteList noteName={n.noteName}  index={index} id={n._id} />
            )
        })
    }
    

    return(
        <Container>
            <h3 className="Page-header">{folderName}</h3>
            <ListGroup className="glass-container list-group">
                {listNotes}
            </ListGroup>
            <br></br>
            <Btn notRedirect={true} link="/createNote" label="Create New Note" />
        </Container>
    )
}

export default ListOfSubjects;