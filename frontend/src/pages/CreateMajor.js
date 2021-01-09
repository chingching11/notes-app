import React , { useState } from "react"
import axios from "axios"
import { Button, Container, Form } from "react-bootstrap";
import InputGroup from "../components/InputGroup" 

function CreateSubject(){
    const [majorName, setMajorName] = useState("")
    
    const sendData = () => {
        const url = "http://localhost:8000/majors" 
        const userInputData = {majorName: majorName}
        console.log(majorName)
        axios.post(url, userInputData)  // post request to api
                .then(res => console.log(res))
                .catch(err => console.log(err)) 
    }
    return(
        <Container className="medium-container">
            <h3> Create New Major</h3>
            <Form className="form">
                <InputGroup 
                    label="Major Name: "
                    placeholder = "Enter major name"
                    setInput = {setMajorName}
                />
            <Button variant="outline-info" type="submit" onClick={sendData} href="/">Add</Button>
            </Form>
        </Container>
    )
}

export default CreateSubject;