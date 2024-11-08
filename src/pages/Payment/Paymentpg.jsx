import React from 'react';
import { Container, Row, Col, Form, Button, ProgressBar, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Paymentpg = () => {
  return (
    <Container fluid className="p-4">
      <Container className="text-center mb-4">
        <img src={"public/chip.jpg"} alt="N Pay Logo" style={{ width: '150px', height: 'auto' }} />
      </Container>

      <Container className="shadow-sm p-4 rounded" style={{ maxWidth: '600px', backgroundColor: '#ffffff' }}>
        <Card className="p-4" style={{ border: '2px solid #17a2b8', borderRadius: '10px' }}>
          <h4 className="mb-4">Enter Your Payment Details</h4>
          <Form>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your full name" />
            </Form.Group>
            <Form.Group controlId="formKTP" className="mb-3">
              <Form.Label>KTP Number</Form.Label>
              <Form.Control type="text" placeholder="Enter your KTP number" />
            </Form.Group>
            <Form.Group controlId="formAddress" className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter your address" />
            </Form.Group>
            <Form.Group controlId="formPostalCode" className="mb-3">
              <Form.Label>Postal Code</Form.Label>
              <Form.Control type="text" placeholder="Enter your postal code" />
            </Form.Group>
            <Form.Group controlId="formPhoneNumber" className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" placeholder="Enter your phone number" />
            </Form.Group>
            <Form.Group controlId="formBankNumber" className="mb-3">
              <Form.Label>Bank Account Number</Form.Label>
              <Form.Control type="text" placeholder="Enter your bank account number" />
            </Form.Group>
          </Form>
        </Card>
        <div className="d-flex justify-content-between mt-4">
          <Button variant="success">Complete Payment</Button>
        </div>
      </Container>

      <footer className="text-center mt-4">
        <p className="text-muted">Dev By PhenTol Team</p>
      </footer>
    </Container>
  );
};

export default Paymentpg;