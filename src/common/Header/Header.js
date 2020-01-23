import React from "react";
import { Container, Col, Row, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";

export default function Header() {
  return (
    <header>
      <Container>
        <Row>
          <Col>
            <Link to="/about">About</Link>
          </Col>
          <Col>
            <Link to="/help">Help</Link>
          </Col>
          <Col>Another section</Col>
          <Col>Another section</Col>
          <Col>
            <NavDropdown title="Login" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
