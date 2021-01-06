import React from "react"
import Container from "react-bootstrap/esm/Container";
import NoteEditor from "../components/NoteEditor"

function CreateNote(){
    return(
        <Container>
            <NoteEditor />   
        </Container>
    )
}

export default CreateNote;
