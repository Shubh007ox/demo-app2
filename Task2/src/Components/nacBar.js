import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import classes from './navBar.module.css'

function NotesNavbar() {
  return (
    <Navbar expand="lg" className={classes.nav}>
      <Navbar.Brand>Notes App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link>All Notes</Nav.Link>
          <Nav.Link>Create Note</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NotesNavbar;
