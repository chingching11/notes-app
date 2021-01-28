import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Header = () => {
    return(
        <Navbar className="container navbar-custom">
            <Navbar.Brand href="/">
            <img
                alt=""
                src="/nerd.png"
                width="50"
                height="50"
                className="d-inline-block align-top"
            />{' '}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>                
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;