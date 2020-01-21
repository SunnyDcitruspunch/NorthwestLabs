import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import AssayList from "../AssayList";
import Center from "../Center";

export default function Navbar() {
  return (
    <Container>
      <Row>
        <Col md={{ span: 4 }}>
          <AssayList />
        </Col>
        <Col>
          <Center />
        </Col>
        <Col md={{ span: 4 }}>
          {" "}
          <ul>
            <li>Right: unstyled ul with recent assays</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
