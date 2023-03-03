import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light py-3">
      <Container>
        <Row>
          <Col md={6}>
            <p>© {currentYear} Parthava Borah</p>
          </Col>
          <Col md={6}>
            <p className="float-md-end">Made with ❤️ and ChatGPT</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
