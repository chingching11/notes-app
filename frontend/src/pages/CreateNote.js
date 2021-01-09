import React, { useState, useEffect } from "react"
import Container from "react-bootstrap/esm/Container";
import NoteCKEditor from "../components/NoteCKEditor"
import { Button, Form } from 'react-bootstrap'
import axios from "axios"
import InputGroup from "../components/InputGroup"

function CreateNote(){

    const [majorName, setMajorName] = useState("")
    const [noteName, setNoteName] = useState("")
    const [noteDetail, setNoteDetail] = useState("")
    const [majors, setMajors] = useState([])

    useEffect(() => {
        // get all majors from backend api
        const getMajors = async () => {
            try {
                const response = await axios (`http://localhost:8000/majors`)
                setMajors(response.data)             
            }catch (err) {
                console.log(err);
            }
        }
        getMajors();
    }, [])

    const majorsOptions = majors.map((m)=> {
        return (
            <option>{m.majorName}</option>
        )
    })

    const sendData = () => {
        const url = "http://localhost:8000/notes" 
        const userInputData = {majorName: majorName, noteName: noteName, noteDetail: noteDetail}
        axios.post(url, userInputData)  // post request to api
                .then(res => console.log(res))
                .catch(err => console.log(err)) 
    }
    return(
        <Container>
        <Form>
            <Form.Group>
                <Form.Label>Select major</Form.Label>
                <Form.Control as="select" onChange={(e) => {setMajorName(e.target.value)}}>
                    <option></option>
                    {majorsOptions}
                </Form.Control>
            </Form.Group>  
            <InputGroup label="Enter note name" setInput={setNoteName} />
        </Form>
            <NoteCKEditor setText={setNoteDetail} />
            <Button variant="outline-info" type="submit" onClick={sendData} href="/">Save</Button>
        </Container>
    )
}

export default CreateNote;
