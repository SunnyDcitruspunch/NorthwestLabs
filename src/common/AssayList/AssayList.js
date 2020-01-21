import React from "react";
import { Nav } from "react-bootstrap";

export default function AssayList() {
  return (
    <Nav className="flex-column">
      <Nav.Link href="#">First Link</Nav.Link>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
      <Nav.Link eventKey="link-2">Another Link</Nav.Link>
    </Nav>
  );
}
