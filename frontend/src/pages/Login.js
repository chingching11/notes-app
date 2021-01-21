import React , { useState }from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import InputGroup from "../components/InputGroup"
import axios from "axios"

const Login = () => {

    const [username, setUername] = useState("")
    const [password, setPassword] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const user = {
          username: username,
          password: password
        }
        const url = "http://localhost:8000/auth"
        axios.post(url, user, { withCredentials: true })
        .then(res => {
            if(res.status === 200){
              console.log('success');
            }
          }
        ).catch(err => {
            console.log(err)
            console.log(err.status);
        }) 
      }

    return(
        <Container className="medium-container">
            <h1>Login</h1>

            <Form className="form" onSubmit={handleSubmit}>
                <InputGroup 
                    label = "username"
                    placeholder = "Enter username"
                    setInput = {setUername}
                />
                <InputGroup 
                    controlId = "formBasicPassword"
                    label = "Password"
                    type = "password"
                    placeholder = "Enter password"
                    setInput={setPassword}
                />
                <Button variant="info" type="submit"> Login </Button>
            </Form>
        </Container>
    )
}

export default Login;