import React, { useEffect, useState } from 'react'
import MajorCard from '../components/MajorCard'
import {Container, Button, Col, Row} from 'react-bootstrap'
import axios from "axios"

function Home(){
    const [majors, setMajors] = useState([])
    useEffect(() => {
        // get all majors from backend api
        const getMajors = async () => {
            try {
                const response = await axios (`http://localhost:8000/majors`)
                const majorsData = response.data.map((d) => {return d.majorName})
                setMajors(majorsData)
                
            }catch (err) {
                console.log(err);
            }
        }
        getMajors();
    }, [])

    const majorCards = majors.map((m) => {
        return (
                <Col xs={12} sm={6} md={4} lg={3}>
                    <MajorCard major={m} />
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
                <Button variant="info" href="/createNewMajor"> Add a Major</Button>
            </Container>
            
        </Container>
    )
}

export default Home;