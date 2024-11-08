import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Adopt.css"; // Optional custom styles


const Adoptpg = () => {
  const cats = Array(9).fill({
    name: "Muna",
    age: "20 bulan",
    breed: "Persian",
    Adopt: "rescue",
  },

);

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Filters Section */}
        <div className="col-md-3">
          <h5>Filters</h5>
          <div className="mb-3">
            <label className="form-label">Age</label>
            <input
              type="number"
              className="form-control"
              min="0"
              placeholder="Enter age"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Gender</label>
            <select className="form-select">
              <option>Any</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Days in petstore</label>
            <input
              type="number"
              className="form-control"
              min="0"
              placeholder="Enter days"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Adopt</label>
            <select className="form-select">
              <option>Any</option>
              <option>Shelter</option>
              <option>rescue</option>
            </select>
          </div>
          <div className="text-center mt-4">
            <button className="btn btn-secondary w-100">Save</button>
          </div>
        </div>

        {/* Cats List Section */}
        <div className="col-md-9">
          <div className="row">
            {cats.map((cat, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card">
                  <img
                    src={"public/Kucing 1.jpg"}
                    className="card-img-top"
                    alt="Cat"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{cat.name}</h5>
                    <p className="card-text">
                      {cat.age} . {cat.breed} . {cat. Adopt}
                    </p>
                    <Link
                          to={`#`} // This creates a unique URL for each cat
                          className="btn mt-auto w-100"
                          style={{
                            backgroundColor: "#FBF7F0",
                            color: "#000",
                            transition: "background-color 0.3s, color 0.3s",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#323232";
                            e.currentTarget.style.color = "#fff";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "#FBF7F0";
                            e.currentTarget.style.color = "#000";
                          }}
                        >
                    Learn More
                  </Link>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adoptpg;
