import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Adopt.css"; // Optional custom styles
import { Collapse } from "react-bootstrap";
import { useState } from "react";

const Adoptpg = () => {
  const [open, setOpen] = useState(false);
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Any");
  const [days, setDays] = useState("");
  const [adopt, setAdopt] = useState("Any");

  const cats = Array(9).fill({
    name: "Muna",
    age: "20 bulan",
    breed: "Persian",
    Adopt: "rescue",
  });

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Filters Section */}
        <div className="col-md-3">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Filters</h5>
              <button
                className="btn btn-success"
                onClick={() => setOpen(!open)}
                aria-controls="filter-collapse"
                aria-expanded={open}
              >
                {open ? "Hide" : "Show"}
              </button>
            </div>
            <Collapse in={open}>
              <div id="filter-collapse" className="card-body">
                <div className="mb-3">
                  <label className="form-label">Age</label>
                  <input
                    type="number"
                    className="form-control"
                    min="0"
                    placeholder="Enter age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Gender</label>
                  <select
                    className="form-select"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
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
                    value={days}
                    onChange={(e) => setDays(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Adopt</label>
                  <select
                    className="form-select"
                    value={adopt}
                    onChange={(e) => setAdopt(e.target.value)}
                  >
                    <option>Any</option>
                    <option>Shelter</option>
                    <option>rescue</option>
                  </select>
                </div>
                <div className="text-center mt-4">
                  <button className="btn btn-primary w-100">Apply Filters</button>
                </div>
              </div>
            </Collapse>
          </div>
        </div>

        {/* Cats List Section */}
        <div className="col-md-9">
          <div className="row">
            {cats.map((cat, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card border-0 shadow-sm" style={{ borderRadius: "10px" }}>
                  <div className="card-img-wrapper" style={{ position: "relative", overflow: "hidden", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}>
                    <img
                      src={"public/Kucing 1.jpg"}
                      className="card-img-top"
                      alt="Cat"
                      style={{ transition: "transform 0.3s", width: "100%", height: "200px", objectFit: "cover" }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title" style={{ fontWeight: "bold", color: "#333" }}>{cat.name}</h5>
                    <div className="card-text text-muted mb-3">
                      <div><strong>Age:</strong> {cat.age}</div>
                      <div><strong>Breed:</strong> {cat.breed}</div>
                      <div><strong>Adopt Status:</strong> {cat.Adopt}</div>
                    </div>
                    <Link
                      to={"#"} // This creates a unique URL for each cat
                      className="btn mt-auto w-100"
                      style={{
                        backgroundColor: "#FBF7F0",
                        color: "#000",
                        transition: "background-color 0.3s, color 0.3s",
                        borderRadius: "5px",
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