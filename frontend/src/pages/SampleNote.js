import React from "react"
import { Container } from "react-bootstrap";
import Note from '../components/Note'

const title = "Sample Title"
const description = "Sample Description"
const body = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

function SampleNote(){
    return(
        <Container>
            <h1> Sample Note Page</h1>
            <br></br>
            <Note title={title} description={description} body={body} />
        </Container>
    )
}

export default SampleNote;