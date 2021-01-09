import React from "react"
import { Button, Container, ListGroup } from "react-bootstrap";
import NoteList from "../components/NoteList"
import axios from "axios"
import { useEffect, useState } from "react";

function ListOfSubjects(props){
    
    const [notes, setNotes] = useState([])
    const [majorName, setMajorName] = useState("")
    useEffect(() => {
        // get all majors from backend api
        const getNotesInfo = async () => {
            try {
                const response = await axios (`http://localhost:8000/majors/${props.match.params.majorId}`)
                setNotes(response.data.notes)  
                setMajorName(response.data.majorName)   
            }catch (err) {
                console.log(err);
            }
        }
        getNotesInfo();
    }, [])

    const listNotes = notes.map((n, index) => {
        return (
            <NoteList noteName={n.noteName}  index={index} id={n._id}/>
        )
    })

    return(
        <Container>
            <h1>{majorName}</h1>
            <ListGroup>
                {listNotes}
            </ListGroup>
            <br></br>
            <Button variant="info" href="/createNote"> Create New Note</Button>
        </Container>
    )
}

export default ListOfSubjects;