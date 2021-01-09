import React from "react"
import { Form }from 'react-bootstrap'

function SelectOption(props){
    return(
        <Form.Group>
                <Form.Label>{props.label}</Form.Label>
                <Form.Control as="select" onChange={(e) => {props.setValue(e.target.value)}}>
                    <option></option>
                    {props.options}
                </Form.Control>
        </Form.Group>  
    )
}

export default SelectOption