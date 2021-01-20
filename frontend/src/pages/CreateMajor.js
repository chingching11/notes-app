import React , { useState } from "react"
import axios from "axios"
import { Button, Container, Form } from "react-bootstrap";
import InputGroup from "../components/InputGroup" 

const CreateSubject = () => {
    const [majorName, setMajorName] = useState("")
    const [imgUrl, setImgUrl] = useState("")
    
    const sendData = () => {
        const url = "http://localhost:8000/majors" 
        const userInputData = {majorName: majorName, imgUrl: imgUrl}
        axios.post(url, userInputData, { withCredentials: true})  // post request to api
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
                <InputGroup 
                    label="img url: "
                    placeholder = "Enter image url"
                    setInput = {setImgUrl}
                />
            <Button variant="outline-info" type="submit" onClick={sendData} href="/">Add</Button>
            </Form>
        </Container>
    )
}

export default CreateSubject;