import React , { useEffect, useState } from 'react'
import {Container, Col, Row } from 'react-bootstrap'
import NoteFolder from '../components/NoteFolder'
import axios from "axios"
import Btn from "../components/Btn"
import { useHistory } from 'react-router-dom';

const ListOfFolders = (props) => {
    let history = useHistory()
    const [folders, setFolders] = useState([])
    const [majorName, setMajorName] = useState("")
    useEffect(() => {
        // get all majors from backend api
        const getFoldersInfo = async () => {
            try {
                const response = await axios (`http://localhost:8000/majors/${props.match.params.majorId}`)
                console.log(response.data)
                setFolders(response.data.folders)  
                setMajorName(response.data.majorName)                     
            }catch (err) {
                console.log(err);
                history.push(`/*`)
            }
        }
        getFoldersInfo();
    }, [props.match.params.majorId, history])

    let listFolders;
    if(folders){
        listFolders = folders.map((f, index) => {
            return (
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                    <NoteFolder folderName={f.folderName} id={f._id}/>
                </Col> 
            )
        })
    }
    return(
        <Container>
            <h1 className="Page-header">{majorName}</h1>
            <Row className="text-center">
                {listFolders}
            </Row>
            <br></br>
            <Btn notRedirect={true} link="/createNewFolder" label="Create New Folder" />
        </Container>
    )
}

export default ListOfFolders