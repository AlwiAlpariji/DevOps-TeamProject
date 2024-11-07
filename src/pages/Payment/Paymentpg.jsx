import React from 'react';
import { Container, Row, Col, Form, Button, ProgressBar, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Paymentpg = () => {
  return (
    <Container fluid className="p-4">
      <Container className="text-center mb-4">
        <h2>N Pay</h2>
      </Container>
      
      <Container className="shadow-sm p-4 rounded" style={{ maxWidth: '600px', backgroundColor: '#ffffff' }}>
        <ProgressBar now={25} className="mb-4" />
        <Row className="mb-3 text-center">
          <Col><strong>1</strong> Enter Details</Col>
          <Col><strong>2</strong> Payment Mode</Col>
          <Col><strong>3</strong> Payment</Col>
          <Col><strong>4</strong> Order Confirmed</Col>
        </Row>
        <Card className="p-4">
          <h4 className="mb-4">Enter Your Details</h4>
          <Form>
            <Form.Group controlId="formUsername" className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter your username" />
            </Form.Group>
            <Form.Group controlId="formAddress" className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter your address" />
            </Form.Group>
          </Form>
        </Card>
        <div className="d-flex justify-content-between mt-4">
          <Button variant="primary">Next</Button>
        </div>
      </Container>

      <footer className="text-center mt-4">
        <p className="text-muted">Dev By PhenTol Team</p>
      </footer>
    </Container>
  );
};

export default Paymentpg;