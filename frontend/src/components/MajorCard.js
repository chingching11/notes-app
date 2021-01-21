import React from 'react'
import { Card} from "react-bootstrap"
import { Link } from 'react-router-dom';

const MajorCard = (props) => {
    return(
        <Link to={{
                pathname:`/majors/${props.id}`,
                majorId: props.id
            }}>
            <Card style={{ width: '14rem' }} className="mx-auto major-card glass-container" >
                <Card.Img style={{width: '100%', height: '10rem'}} variant="top" src={props.imgUrl} />
                <Card.Body>
                    <Card.Title className="major-label-box">{props.major}</Card.Title>
                </Card.Body>
            </Card>
        </Link>
        
            
    )

}

export default MajorCard;