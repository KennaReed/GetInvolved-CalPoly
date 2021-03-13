import {Nav, Navbar, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import React from 'react'

function Navibar() {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Get Involved!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#post">Post</Nav.Link>
                <Nav.Link href="#forum">Forum</Nav.Link>
                <Nav.Link href="#calendar">Calendar</Nav.Link>
                <NavDropdown title="Options" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">What's New?</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Club Home Pages</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" classname="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
            </Form>
        </Navbar.Collapse>
    </Navbar>
    );
}

export default Navibar;
