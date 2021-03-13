import {Nav, Navbar, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import React from 'react'

function Navibar() {
    return (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Get Involved!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="mr-auto">
            <li><a href="#home">Home</a></li>
            <li><a href="#post">Post</a></li>
            <li><a href="#forum">Forum</a></li>
            <li><a href="#calendar">Calendar</a></li>
        </Nav>
        <Form inline>
            <FormControl type="text" placeholder="Search" classname="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
        </Form>
    </Navbar>
    );
}

export default Navibar;
