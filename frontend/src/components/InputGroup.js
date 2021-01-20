import React from 'react'
import { Form } from 'react-bootstrap'

const InputGroup = (props) => {
    return(
        <Form.Group controlId={props.controlId}>
            <Form.Label>{props.label}</Form.Label>
            <Form.Control type={props.type} placeholder={props.placeholder} value={props.value}
                    onChange={(e) => {
                        props.setInput(e.target.value)
                    }}
            />
        </Form.Group>
        
    )
}

export default InputGroup;