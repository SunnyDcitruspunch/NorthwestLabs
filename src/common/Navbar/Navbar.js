import React from "react";
import { Container, Col, Row } from "react-bootstrap";
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
          <ul>
            <li>Right: unstyled ul with recent assays</li>
            <li>Pending Assay</li>
            <li>Another Pending Assay</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
