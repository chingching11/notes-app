import React from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import InputGroup from "../components/InputGroup"

function Login(){
    return(
        <Container className="medium-container">
            <h1>Login</h1>

            <Form className="form">
                <InputGroup 
                    controlId = "formBasicEmail"
                    label = "Email"
                    type = "email"
                    placeholder = "Enter username"
                />
                <InputGroup 
                    controlId = "formBasicPassword"
                    label = "Password"
                    type = "password"
                    placeholder = "Enter password"
                />
                <Button variant="info" type="submit"> Login </Button>
            </Form>
            <p className="text-muted"> Want to be a Nerd?</p>
            <Button variant="outline-info" href="/signUp">Create New Account</Button>
        </Container>
    )
}

export default Login;