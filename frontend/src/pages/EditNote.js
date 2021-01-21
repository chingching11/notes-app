import React, { useState, useEffect } from "react"
import Container from "react-bootstrap/esm/Container";
import NoteCKEditor from "../components/NoteCKEditor"
import { Button } from 'react-bootstrap'
import axios from "axios"
import RequireAuth from "../components/RequireAuth"
import InputGroup from "../components/InputGroup"

const EditNote = (props) => {
    const [noteDetail, setNoteDetail] = useState("")
    const [noteName, setNoteName] = useState("")

    useEffect(() => {
        // get all majors from backend api
        const getNoteDetail = async () => {
            try {
                const response = await axios (`http://localhost:8000/notes/${props.match.params.noteId}`)
                console.log(response.data)
                setNoteName(response.data.noteName)
                setNoteDetail(response.data.noteDetail)             
            }catch (err) {
                console.log(err);
            }
        }
        getNoteDetail()
    }, [props.match.params.noteId])

    const sendData = () => {
        const url = `http://localhost:8000/notes/${props.match.params.noteId}`
        const userInputData = { noteName: noteName, noteDetail: noteDetail}
        axios.patch(url, userInputData, { withCredentials: true })  // patch request to api
                .then(res => console.log(res))
                .catch(err => console.log(err)) 
    }

    return (
        <Container>
            <InputGroup label="Enter note name" value={noteName} setInput={setNoteName} />
            <NoteCKEditor setText={setNoteDetail} data={noteDetail}/>
            <Button variant="outline-info" type="submit" onClick={sendData} href={`/notes/${props.match.params.noteId}`}>Save</Button>
        </Container>
    )
}

export default RequireAuth(EditNote)