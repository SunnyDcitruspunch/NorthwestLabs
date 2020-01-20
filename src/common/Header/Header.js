import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

export default function Header() {
  return (
    <header>
      <Container>
        <Row>
          <Col>sm=8</Col>
          <Col>sm=4</Col>
          <Col>sm=true</Col>
          <Col>sm=true</Col>
          <Col>sm=true</Col>
        </Row>
      </Container>
    </header>
  );
}
