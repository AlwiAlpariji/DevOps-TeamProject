import React, { useState } from 'react';
import { Container, Form, Card, ProgressBar, Alert, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Paymentpg = () => {
  const [formData, setFormData] = useState({
    name: '',
    ktp: '',
    address: '',
    postalCode: '',
    phoneNumber: '',
    bankNumber: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(formData).some(field => field === '')) {
      alert("Please complete all fields");
      return;
    }

    setIsSubmitting(true);
    setProgress(20);

    // Simulate payment processing
    setTimeout(() => {
      setProgress(100);
      setIsSubmitting(false);
      setShowConfirmation(true);
    }, 2000);
  };

  return (
    <Container fluid className="p-4">
      <Container className="text-center mb-4">
        <img src={"public/chip.jpg"} alt="N Pay Logo" style={{ width: '150px', height: 'auto' }} />
      </Container>

      <Container className="shadow-sm p-4 rounded" style={{ maxWidth: '600px', backgroundColor: '#ffffff' }}>
        <Card className="p-4" style={{ border: '2px solid #17a2b8', borderRadius: '10px' }}>
          <h4 className="mb-4">Enter Your Payment Details</h4>
          
          {showConfirmation ? (
            <Alert variant="success" className="text-center">
              Payment Complete! Thank you for your purchase.
            </Alert>
          ) : (
            <>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName" className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="name" 
                    placeholder="Enter your full name" 
                    value={formData.name} 
                    onChange={handleChange} 
                  />
                </Form.Group>
                <Form.Group controlId="formKTP" className="mb-3">
                  <Form.Label>KTP Number</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="ktp" 
                    placeholder="Enter your KTP number" 
                    value={formData.ktp} 
                    onChange={handleChange} 
                  />
                </Form.Group>
                <Form.Group controlId="formAddress" className="mb-3">
                  <Form.Label>Address</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={3} 
                    name="address" 
                    placeholder="Enter your address" 
                    value={formData.address} 
                    onChange={handleChange} 
                  />
                </Form.Group>
                <Form.Group controlId="formPostalCode" className="mb-3">
                  <Form.Label>Postal Code</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="postalCode" 
                    placeholder="Enter your postal code" 
                    value={formData.postalCode} 
                    onChange={handleChange} 
                  />
                </Form.Group>
                <Form.Group controlId="formPhoneNumber" className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="phoneNumber" 
                    placeholder="Enter your phone number" 
                    value={formData.phoneNumber} 
                    onChange={handleChange} 
                  />
                </Form.Group>
                <Form.Group controlId="formBankNumber" className="mb-3">
                  <Form.Label>Bank Account Number</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="bankNumber" 
                    placeholder="Enter your bank account number" 
                    value={formData.bankNumber} 
                    onChange={handleChange} 
                  />
                </Form.Group>

                <ProgressBar animated now={progress} className="my-3" />

                <Button variant="success" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Processing..." : "Complete Payment"}
                </Button>
              </Form>
            </>
          )}
        </Card>
        {showConfirmation && (
          <div className="d-flex justify-content-center mt-4">
            <Link to="/" className="btn btn-primary">Return to Homepage</Link>
          </div>
        )}
      </Container>

      <footer className="text-center mt-4">
        <p className="text-muted">Dev By PhenTol Team</p>
      </footer>
    </Container>
  );
};

export default Paymentpg;
