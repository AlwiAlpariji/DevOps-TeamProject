import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Adopt.css'; // Optional custom styles

const Adoptpg = () => {
    const cats = Array(9).fill({
        name: 'Muna',
        age: '20 bulan',
        breed: 'Persian',
        distance: '500 Meter',
    });

    return (
        <div className="container mt-4">
            <div className="row">
                {/* Filters Section */}
                <div className="col-md-3">
                    <h5>Filters</h5>
                    <div className="mb-3">
                        <label className="form-label">AGE</label>
                        <select className="form-select">
                            <option>Any</option>
                            <option>1</option>
                            <option>2</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">GENDER</label>
                        <select className="form-select">
                            <option>Any</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">DAYS IN PETS STORE</label>
                        <select className="form-select">
                            <option>Any</option>
                            <option>1</option>
                            <option>2</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">SHELTER OR RESCUE</label>
                        <select className="form-select">
                            <option>Any</option>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                    </div>
                    <div className="text-center mt-4">
                        <button className="btn btn-primary">SAVE SEARCH</button>
                    </div>
                </div>

                {/* Cats List Section */}
                <div className="col-md-9">
                    <div className="row">
                        {cats.map((cat, index) => (
                            <div className="col-md-4 mb-4" key={index}>
                                <div className="card">
                                    <img src={"public/Kucing 1.jpg"} className="card-img-top" alt="Cat" />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">{cat.name}</h5>
                                        <p className="card-text">{cat.age} . {cat.breed} . {cat.distance}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Adoptpg;
