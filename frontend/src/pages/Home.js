import React, { useEffect, useState } from 'react'
import MajorCard from '../components/MajorCard'
import {Container, Col, Row } from 'react-bootstrap'
import axios from "axios"
import Btn from "../components/Btn"

const Home = () => {
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
        if(m.imgUrl==='') m.imgUrl='logo192.png'
        return (
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                    <MajorCard major={m.majorName} imgUrl={m.imgUrl} id={m._id} />
                </Col>           
        )
    })

    return(
        <Container>
            <div className="glass-container">
                <h1 className="Page-header"> Majors </h1>
                <Row className="text-center">
                    {majorCards}
                </Row>
                <br></br>
            </div>   
            <br></br>
            <Btn notRedirect={true} link="/createNewMajor" label="Create New Major" />
        </Container>
    )
}

export default Home;