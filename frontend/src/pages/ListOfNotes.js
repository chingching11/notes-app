import React from "react"
import { Button, Container, ListGroup } from "react-bootstrap";
import NotesList from "../components/NotesList"
import axios from "axios"
import { useEffect, useState } from "react";

function ListOfSubjects(props){
    
    const [notes, setNotes] = useState([])
    const [majorName, setMajorName] = useState("")
    useEffect(() => {
        // get all majors from backend api
        const getNotes = async () => {
            try {
                const response = await axios (`http://localhost:8000/majors/${props.match.params.majorId}`)
                console.log(props.location.majorId)
                console.log(response.data)
                setNotes(response.data.notes)  
                setMajorName(response.data.majorName)   
            }catch (err) {
                console.log(err);
            }
        }
        getNotes();
    }, [])

    const listNotes = notes.map((n, index) => {
        return (
            <NotesList noteName={n.noteName}  index={index} />
        )
    })
    return(
        <Container>
            <h1>{majorName}</h1>
            <ListGroup>
                {listNotes}
            </ListGroup>
            <br></br>
            <Button variant="info" href="/createNewSubject"> Create New Subject</Button>
        </Container>
    )
}

export default ListOfSubjects;