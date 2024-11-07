import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPaw, FaSearch, FaAward, FaHome } from 'react-icons/fa';

const Homepage = () => {
  return (
    <div className="container-fluid p-0">
      {/* Hero Section */}
      <div className="hero-section position-relative" style={{
        backgroundImage: "url('/path/to/cat-hero.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '500px'
      }}>
        <div className="overlay position-absolute w-100 h-100" 
          style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
        </div>
        <div className="content position-relative z-1 text-white d-flex flex-column justify-content-center align-items-start p-5 h-100">
          <h1 className="display-4 fw-bold">Netto Pet Shop</h1>
          <p className="lead">BECAUSE WE LOVE ANIMAL</p>
          <div className="mt-4">
            <button className="btn btn-light me-3">Consultation</button>
            <button className="btn btn-outline-light">Contact Us</button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <h2 className="mb-4">About Us</h2>
            <h3 className="mb-3">About Netto Pet Shop</h3>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim. Pellentesque in 
              ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque 
              nec, egestas non nisi.
            </p>
          </div>
          <div className="col-md-6">
            <p className="text-muted">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
              mollit anim id est laborum. Sed ut perspiciatis. Pellentesque in ipsum id orci 
              porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
            </p>
          </div>
        </div>
      </div>

      {/* Adoptable Animals Section */}
      <div className="container text-center my-5">
        <h2 className="display-5 mb-3">Adoptable Animals</h2>
        <p className="text-muted mb-4">These animals are waiting for a new home</p>
        
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src="/path/to/cat-anna.jpg" className="card-img-top" alt="Anna" />
              <div className="card-body">
                <h5 className="card-title">Anna</h5>
                <p className="card-text">Domestic Short-Hair</p>
                <p className="text-muted">Baby - Female</p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src="/path/to/dog-ollie.jpg" className="card-img-top" alt="Ollie" />
              <div className="card-body">
                <h5 className="card-title">Ollie</h5>
                <p className="card-text">Doberman</p>
                <p className="text-muted">Baby - Male</p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src="/path/to/cat-will.jpg" className="card-img-top" alt="Will" />
              <div className="card-body">
                <h5 className="card-title">Will</h5>
                <p className="card-text">Domestic Short-Hair</p>
                <p className="text-muted">Baby - Male</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-light py-5">
        <div className="container text-center">
          <h3 className="mb-2">SERVICES</h3>
          <h2 className="display-5 mb-5">What We Do</h2>
          
          <div className="row g-4">
            <div className="col-md-3">
              <div className="service-item">
                <FaPaw className="text-warning mb-3" style={{ fontSize: '2.5rem' }} />
                <h4>GROOMING</h4>
                <p className="text-muted">
                  Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. 
                  Nulla quis lorem ut libero malesuada
                </p>
              </div>
            </div>
            
            <div className="col-md-3">
              <div className="service-item">
                <FaSearch className="text-warning mb-3" style={{ fontSize: '2.5rem' }} />
                <h4>PET LICENSING</h4>
                <p className="text-muted">
                  Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. 
                  Nulla quis lorem ut libero malesuada
                </p>
              </div>
            </div>
            
            <div className="col-md-3">
              <div className="service-item">
                <FaAward className="text-warning mb-3" style={{ fontSize: '2.5rem' }} />
                <h4>SPAY & NEUTER</h4>
                <p className="text-muted">
                  Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. 
                  Nulla quis lorem ut libero malesuada
                </p>
              </div>
            </div>
            
            <div className="col-md-3">
              <div className="service-item">
                <FaHome className="text-warning mb-3" style={{ fontSize: '2.5rem' }} />
                <h4>FINDING A HOME</h4>
                <p className="text-muted">
                  Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. 
                  Nulla quis lorem ut libero malesuada
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Homepage;