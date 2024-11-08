import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Footercomp.css'; // Optional: for any custom styles

const FooterComp = () => {
    return (
        <div className="text-light text-center py-5" style={{ backgroundColor: '#323232' }}> {/* Updated background color here */}
            <h2>Join Our Newsletter</h2>
            <p>Dapatkan tips merawat hewan peliharaan, penawaran spesial, dan berita terbaru langsung di kotak masuk Anda. Bergabunglah dengan komunitas pecinta hewan sekarang!</p>
            <form className="d-flex justify-content-center align-items-center">
                <input 
                    type="email" 
                    className="form-control me-2" 
                    placeholder="Email" 
                    required 
                    style={{ width: '300px', borderRadius: '20px' }} // Adjust width and styling here
                />
                <button type="submit" className="btn btn-success" style={{ borderRadius: '20px' }}>SUBSCRIBE</button>
            </form>
            <div className="social-icons mt-3">
                <a href="#" className="text-light mx-2"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="text-light mx-2"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-light mx-2"><i className="fab fa-instagram"></i></a>
                <a href="#" className="text-light mx-2"><i className="fab fa-youtube"></i></a>
            </div>
        </div>
    );
}

export default FooterComp;
