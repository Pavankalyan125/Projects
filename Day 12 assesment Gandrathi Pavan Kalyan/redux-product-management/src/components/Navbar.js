import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">E-Commerce</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/">Products</Nav.Link>
        <Nav.Link as={Link} to="/wishlist">Wishlist</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;