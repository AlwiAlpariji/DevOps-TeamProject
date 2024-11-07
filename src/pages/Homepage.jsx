import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Homepage = () => {
  const adoptableAnimals = [
    { name: 'Anna', type: 'Domestic Short-hair', details: 'Baby - Female', image: '/anna.jpg' },
    { name: 'Ollie', type: 'Doberman', details: 'Baby - Male', image: '/ollie.jpg' },
    { name: 'Will', type: 'Domestic Short-hair', details: 'Baby - Male', image: '/will.jpg' }
  ];

  const services = [
    { title: 'GROOMING', description: 'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada', icon: '🐾' },
    { title: 'PET LICENSING', description: 'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada', icon: '🔍' },
    { title: 'SPAY & NEUTER', description: 'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada', icon: '🏆' },
    { title: 'FINDING A HOME', description: 'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada', icon: '🏠' }
  ];

  return (
    <div>
      {/* Header */}
      <div className="jumbotron jumbotron-fluid bg-dark text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 font-weight-bold">Netto Pet Shop</h1>
          <p className="lead">BECAUSE WE LOVE ANIMAL</p>
          <div className="mt-4">
            <button className="btn btn-light mr-2">Consultation</button>
            <button className="btn btn-light">Contact Us</button>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <h2 className="font-weight-bold">About Us</h2>
            <h3>About Netto Pet Shop</h3>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim. Pellentesque in
              ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque
              nec, egestas non nisi. Nulla quis lorem ut libero malesuada feugiat.
            </p>
          </div>
          <div className="col-md-6">
            <p className="text-muted">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum. Sed ut perspiciatis. Pellentesque in ipsum id orci
              porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non
              nisi.
            </p>
          </div>
        </div>
      </div>

      {/* Adoptable Animals Section */}
      <div className="bg-light py-5">
        <div className="container">
          <h2 className="text-center font-weight-bold">Adoptable Animals</h2>
          <p className="text-center mb-4">These animals are waiting for a new home</p>
          <div className="row">
            {adoptableAnimals.map((animal, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card shadow">
                  <img src={animal.image} className="card-img-top" alt={animal.name} />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">{animal.name}</h5>
                    <p className="card-text text-muted">{animal.type}</p>
                    <p className="card-text text-muted">{animal.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container py-5">
        <h2 className="text-center font-weight-bold">SERVICES</h2>
        <h3 className="text-center mb-5">What We Do</h3>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-md-3 mb-4 text-center">
              <div className="display-4 mb-3">{service.icon}</div>
              <h4 className="font-weight-bold">{service.title}</h4>
              <p className="text-muted">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-dark text-white py-5">
        <div className="container text-center">
          <h2 className="font-weight-bold mb-4">Join Our Newsletter</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aliquam ut lorem placerat, laoreet magna non, sagittis augue.
            Aliquam felis metus.
          </p>
          <div className="d-flex justify-content-center mb-4">
            <input type="email" className="form-control mr-2 w-50" placeholder="Email" />
            <button className="btn btn-light">SUBSCRIBE</button>
          </div>
          <div className="d-flex justify-content-center">
            <Facebook className="text-light mx-3" />
            <Twitter className="text-light mx-3" />
            <Instagram className="text-light mx-3" />
            <Youtube className="text-light mx-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
