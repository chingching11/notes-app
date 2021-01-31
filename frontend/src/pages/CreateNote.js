import React, { useState, useEffect } from "react"
import Container from "react-bootstrap/esm/Container";
import NoteCKEditor from "../components/NoteCKEditor"
import { Button } from 'react-bootstrap'
import axios from "axios"
import InputGroup from "../components/InputGroup"
import SelectOption from "../components/SelectOption"
import RequireAuth from "../components/RequireAuth"
import { useHistory } from 'react-router-dom';
import DOMPurify from 'dompurify';

const CreateNote = () => {
    const history = useHistory()
    const [folderName, setFolderName] = useState("")
    const [noteName, setNoteName] = useState("")
    const [noteDetail, setNoteDetail] = useState("")
    const [folders, setFolders] = useState([])

    useEffect(() => {
        // get all folders from backend api
        const getFolders = async () => {
            try {
                const response = await axios (`http://localhost:8000/folders`)
                setFolders(response.data)             
            }catch (err) {
                console.log(err);
            }
        }
        getFolders();
    }, [])

    const foldersOptions = folders.map((f)=> {
        return (
            <option>{f.folderName}</option>
        )
    })
    let folderId = ""
    const getFolderId =  () => {
        folders.forEach((f) => {
            if(f.folderName === folderName){
                folderId = f._id
            }
        })
    }
    const sendData = () => {
        const url = "http://localhost:8000/notes" 
        const cleanNoteDetail = DOMPurify.sanitize(noteDetail)
        const userInputData = {folderName: folderName, noteName: noteName, noteDetail: cleanNoteDetail}
        axios.post(url, userInputData, { withCredentials: true })  // post request to api
                .then(res => {
                    console.log(res)
                    getFolderId()
                    history.push(`/folders/${folderId}`)
                })
                .catch(err => console.log(err))
        
        
    }
    return(
        <Container>
            <SelectOption label="Select folder" setValue={setFolderName} options={foldersOptions} />
            <InputGroup label="Enter note name" setInput={setNoteName} />
            <NoteCKEditor setText={setNoteDetail} />
            <Button variant="outline-info" type="submit" onClick={sendData}>Save</Button>
        </Container>
    )
}

export default RequireAuth(CreateNote)
