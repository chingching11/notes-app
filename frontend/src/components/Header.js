import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'

const Header = () => {
    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">
            {/* <img
                alt=""
                src="/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '} */}
            Nerdy
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/createNote">Create Note</Nav.Link>
                </Nav>                
                <Button variant="info" href="/login">Log in</Button>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;