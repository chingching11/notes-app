import React from "react"
import { Container, ListGroup } from "react-bootstrap";
import NoteList from "../components/NoteList"
import axios from "axios"
import { useEffect, useState } from "react";
import Btn from "../components/Btn"

const ListOfSubjects = (props) => {
    
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
    }, [props.match.params.majorId])

    const listNotes = notes.map((n, index) => {
        return (
            <NoteList noteName={n.noteName}  index={index} id={n._id} />
        )
    })

    return(
        <Container>
            <h1>{majorName}</h1>
            <ListGroup>
                {listNotes}
            </ListGroup>
            <br></br>
            <Btn notRedirect={true} link="/createNote" label="Create New Note" />
        </Container>
    )
}

export default ListOfSubjects;