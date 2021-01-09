import React from 'react'
import { Card} from "react-bootstrap"
import { Link } from 'react-router-dom';

function MajorCard(props) {
    return(
        <Link to={{
                pathname:`/majors/${props.id}`,
                majorId: props.id
            }}>
            <Card style={{ width: '14rem' }} className="mx-auto major-card" >
                <Card.Img variant="top" src="logo192.png"/>
                <Card.Body>
                    <Card.Title>{props.major}</Card.Title>
                </Card.Body>
            </Card>
        </Link>
        
            
    )

}

export default MajorCard;