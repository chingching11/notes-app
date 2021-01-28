import React , { useState, useEffect } from "react"
import axios from "axios"
import { Button, Container, Form } from "react-bootstrap";
import InputGroup from "../components/InputGroup" 
import SelectOption from "../components/SelectOption"


const CreateFolder = () => {
    const [folderName, setFolderName] = useState("")
    const [majorName, setMajorName] = useState("")
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

    const sendData = () => {
        const url = "http://localhost:8000/folders" 
        const userInputData = {folderName: folderName, majorName: majorName}
        console.log(userInputData)
        axios.post(url, userInputData, { withCredentials: true})  // post request to api
                .then(res => console.log(res))
                .catch(err => console.log(err)) 
    }
    let majorsOptions
    if(majors){
        majorsOptions = majors.map((m)=> {
            return (
                <option>{m.majorName}</option>
            )
        })
    }
    
    return(
        <Container className="medium-container">
            <h3> Create New Folder</h3>
            <Form className="form">
                <SelectOption label="Select major" setValue={setMajorName} options={majorsOptions} />
                <InputGroup 
                    label="folder name "
                    setInput = {setFolderName}
                />
            <Button variant="outline-info" type="submit" onClick={sendData} href="/">Add</Button>
            </Form>
            
        </Container>
    )
}

export default CreateFolder;