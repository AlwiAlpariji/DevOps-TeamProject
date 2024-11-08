import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPaw, FaSearch, FaAward, FaHome } from "react-icons/fa";

const Homepage = () => {
  return (
    <div className="container-fluid p-0">
      {/* Hero Section */}
      <div
        className="hero-section position-relative"
        style={{
          backgroundImage: "url('public/Bannerkucing.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
        }}
      >
        <div
          className="overlay position-absolute w-100 h-100"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        ></div>
        <div className="container h-100">
          <div className="content position-relative z-1 text-white d-flex flex-column justify-content-center align-items-start h-100">
            <h1 className="display-4 fw-bold">Netto Pet Shop</h1>
            <p className="lead">BECAUSE WE LOVE ANIMAL</p>
            <div className="mt-4">
              <button className="btn btn-light me-3">Consultation</button>
              <button className="btn btn-outline-light">Contact Us</button>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container-fluid bg-light py-5">
        <div className="container my-5 py-3">
          <div className="row">
            <div className="col-md-6">
              <h2 className="mb-4 ">
                <strong>ABOUT US</strong>
              </h2>
              <p className="text-muted">
                Netto Pet Shop adalah tempat yang didedikasikan untuk mencintai
                dan merawat hewan peliharaan Anda. Kami menyediakan segala
                kebutuhan yang diperlukan untuk kebahagiaan dan kesehatan hewan
                kesayangan Anda. Mulai dari makanan hewan yang berkualitas,
                mainan, hingga layanan grooming dan perawatan kesehatan. Kami
                percaya bahwa hewan peliharaan bukan hanya sekadar teman, tetapi
                bagian dari keluarga
              </p>
            </div>
            <div className="col-md-4">
              <p className="text-muted">
                Dengan tim profesional yang berpengalaman dan penuh kasih, kami
                berkomitmen untuk memberikan layanan terbaik, memastikan setiap
                hewan peliharaan yang datang ke Netto Pet Shop mendapat
                perhatian dan perawatan yang optimal. Bergabunglah dengan
                keluarga besar Netto Pet Shop, karena di sini, setiap hewan
                berhak mendapatkan cinta dan kasih sayang dari setiap orang.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Adoptable Animals Section */}
      <div className="container text-center my-5">
  <h2 className="mb-5">
    <strong>ADOPTION</strong>
  </h2>
  <p className="text-muted mb-4">
    Mereka menunggu kamu untuk diadopsi dan mendapatkan rumah baru.
  </p>
  <div className="row justify-content-center">
    <div className="col-md-3 mb-4">
      <div className="card h-100 shadow-sm border-0" style={{ width: "90%" }}>
        <img
          src="public/Kucing 1.jpg"
          className="card-img-top rounded-top"
          alt="Anna"
          style={{ objectFit: "cover", height: "220px" }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-bold fs-5">
            Anna
          </h5>
          <p className="card-text mb-1">Domestic Short-Hair</p>
          <p className="text-muted mb-2">Baby - Female</p>
          <a
            href="#"
            className="btn mt-auto"
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
          </a>
        </div>
      </div>
    </div>

    <div className="col-md-3 mb-4">
      <div className="card h-100 shadow-sm border-0" style={{ width: "90%" }}>
        <img
          src="public/Anjing 1.jpeg"
          className="card-img-top rounded-top"
          alt="Ollie"
          style={{ objectFit: "cover", height: "220px" }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-bold fs-5">
            Ollie
          </h5>
          <p className="card-text mb-1">Doberman</p>
          <p className="text-muted mb-2">Baby - Male</p>
          <a
            href="#"
            className="btn mt-auto"
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
          </a>
        </div>
      </div>
    </div>

    <div className="col-md-3 mb-4">
      <div className="card h-100 shadow-sm border-0" style={{ width: "90%" }}>
        <img
          src="public/Persia 1.jpeg"
          className="card-img-top rounded-top"
          alt="Will"
          style={{ objectFit: "cover", height: "220px" }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-bold fs-5" >
            Will
          </h5>
          <p className="card-text mb-1">Persian</p>
          <p className="text-muted mb-2">Baby - Male</p>
          <a
            href="#"
            className="btn mt-auto"
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
          </a>
        </div>
      </div>
    </div>
  </div>
</div>


      {/* Services Section */}
      <div className="bg-light py-5">
        <div className="container text-center py-5">
          <h3 className="mb-2 mt-n3">
            <strong>SERVICES</strong>
          </h3>
          <div className="row g-4">
            <div className="col-md-3">
              <div className="service-item">
                <FaPaw
                  className="text-warning mb-3"
                  style={{ fontSize: "2.5rem" }}
                />
                <h4>GROOMING</h4>
                <p className="text-muted">
                  Perawatan grooming terbaik untuk menjaga hewan kesayangan Anda tetap bersih dan rapi.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="service-item">
                <FaSearch
                  className="text-warning mb-3"
                  style={{ fontSize: "2.5rem" }}
                />
                <h4>PET LICENSING</h4>
                <p className="text-muted">
                Kami membantu Anda mengurus perizinan hewan peliharaan dengan mudah dan cepat.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="service-item">
                <FaAward
                  className="text-warning mb-3"
                  style={{ fontSize: "2.5rem" }}
                />
                <h4>SPAY & NEUTER</h4>
                <p className="text-muted">
                Layanan steril untuk menjaga kesehatan hewan dan mengendalikan populasi.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="service-item">
                <FaHome
                  className="text-warning mb-3"
                  style={{ fontSize: "2.5rem" }}
                />
                <h4>FINDING A HOME</h4>
                <p className="text-muted">
                Membantu hewan menemukan rumah baru yang penuh kasih.
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
