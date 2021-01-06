import React from "react"
import { Button, Container, ListGroup } from "react-bootstrap";
import SubjectFolder from "../components/SubjectFolder"

function ListOfSubjects(props){
    return(
        <Container>
            <h1>{props.location.majorName}</h1>
            <ListGroup>
                <SubjectFolder />
                <SubjectFolder />
                <SubjectFolder />
            </ListGroup>
            <br></br>
            <Button variant="info" href="/createNewSubject"> Create New Subject</Button>
        </Container>
    )
}

export default ListOfSubjects;