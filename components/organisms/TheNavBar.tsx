import React from "react";
import Container from "react-bootstrap/Container";

export default () => {
  return (
    <Container>
      <nav className="d-flex align-items-center py-2">
        <div className="font-weight-bold mr-4" style={{textDecoration: "underline" }}>CCAP</div>

        <ul className="d-flex text-info">
          <li className="p-2">All coins</li>
          <li className="p-2">My portfolio</li>
          <li className="p-2">Features</li>
        </ul>

        <div className="flex-fill" />

        <input placeholder="hello" className="rounded-pill" />

        <div>Jean-Baptiste</div>
      </nav>
    </Container>
  );
};
