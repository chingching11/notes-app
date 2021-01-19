import React, { useEffect, useState } from 'react'
import MajorCard from '../components/MajorCard'
import {Container, Col, Row } from 'react-bootstrap'
import axios from "axios"
import Btn from "../components/Btn"

function Home(){
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
        getMajors()
    }, [])

    const majorCards = majors.map((m) => {
        return (
                <Col xs={12} sm={6} md={4} lg={3}>
                    <MajorCard major={m.majorName} id={m._id} />
                </Col>           
        )
    })

    return(
        <Container>
            <h1 className="Page-header"> Majors </h1>
            <Container>
                <Row className="text-center">
                    {majorCards}
                </Row>

                <br></br>

                <Btn notRedirect={true} link="/createNewMajor" label="Create New Major" />
            </Container>
            
        </Container>
    )
}

export default Home;