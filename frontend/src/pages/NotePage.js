import React , { useState, useEffect } from "react"
import { Redirect } from "react-router-dom"
import { Container } from "react-bootstrap";
import Note from '../components/Note'
import axios from "axios"

function NotePage(props){

    const [note, setNote] = useState({})
    const [errorStatusCode, setErrorStatusCode ] = useState('');

    useEffect(() => {
        // get specific note from backend api using note id
        const getNote = async () => {
            try {
                const response = await axios (`http://localhost:8000/notes/${props.match.params.noteId}`)
                setNote(response.data)
            }catch (err) {
                console.log(err);
                setErrorStatusCode('404')
            }
        }
        getNote();
    }, [props.match.params.noteId])

    if(errorStatusCode === '404') {
        return <Redirect to={{pathname: "/NotFound"}} />
    } 

    return(
        <Container>
            <h1> Note Page</h1>
            <br></br>
            <Note title={note.noteName} body={note.noteDetail} />
        </Container>
    )
}

export default NotePage;