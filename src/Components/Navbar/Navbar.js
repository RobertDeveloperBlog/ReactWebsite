import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar as Bar,
} from "react-bootstrap";
import logo from "../logo192.png";
import React from "react";

const Navbar = () => {
  return (
    <Bar sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container>
        <Bar.Brand href="/">
          <img
            src={logo}
            height="30"
            width="30"
            className="d-inline-block align-top"
            alt="logo"
          />{" "}
          React Site
        </Bar.Brand>
        <Bar.Toggle aria-controls="responsive-navbar-nav" />
        <Bar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About us</Nav.Link>
            <Nav.Link href="/contacts">Contacts</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="me-sm-2" />
          </Form>
          <Button variant="outline-info">Search</Button>
        </Bar.Collapse>
      </Container>
    </Bar>
  );
};

export default Navbar;
