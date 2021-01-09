import React , { useState, useEffect } from "react"
import { Container } from "react-bootstrap";
import Note from '../components/Note'
import axios from "axios"

function NotePage(props){

    const [note, setNote] = useState({})
    useEffect(() => {
        // get specific note from backend api using note id
        const getNote = async () => {
            try {
                const response = await axios (`http://localhost:8000/notes/${props.match.params.noteId}`)
                setNote(response.data)
            }catch (err) {
                console.log(err);
            }
        }
        getNote();
    }, [props.match.params.noteId])
    return(
        <Container>
            <h1> Note Page</h1>
            <br></br>
            <Note title={note.noteName} body={note.noteDetail} />
        </Container>
    )
}

export default NotePage;