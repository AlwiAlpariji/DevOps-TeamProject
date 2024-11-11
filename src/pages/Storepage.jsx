import React from 'react';
import "../style/PetStore.css"; // Optional custom styles

// Import gambar dari public folder
const productImageUrl = "public/PoopBag.jpg";

const PetshopStore = () => {
  const products = [
    {
      id: 1,
      name: "Plastik Kotoran Hewan PUP POOP BAG",
      description: "Biodegradable Compostable 16 PCS - isi 10",
      price: "Rp.61.499",
      sold: "10 rb",
      image: productImageUrl
    },
  ];

  return (
    <div className="main-content">
      {/* Left Column - Products Section */}
      <div className="products-section">
        {/* Search Bar */}
        <div className="search-wrapper">
          <span className="search-icon">🔍</span>
          <input 
            type="text" 
            className="search-input" 
            placeholder="Cari di Netto Petshop"
          />
        </div>

        {/* Filter Buttons */}
        <div className="filter-container">
          <button className="filter-btn">
            <span className="filter-icon">≡</span> Filter
          </button>
          <button className="filter-btn">
            <span className="filter-icon">≡</span> Medan
          </button>
          <button className="filter-btn">Official Store</button>
          <button className="filter-btn">Bebas Ongkir</button>
          <button className="filter-btn">COD</button>
          <button className="filter-btn">Power Merchand</button>
          <button className="filter-btn">Cashback</button>
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {Array(6).fill(products[0]).map((product, index) => (
            <div key={index} className="product-card">
              <div className="qstock-badge">Qstock</div>
              <div className="product-image-wrapper">
                <img 
                  src={product.image}
                  alt="Poop Bags" 
                  className="product-image"
                />
                <div className="product-category-label">
                  PLASTIK KOTORAN BINATANG
                </div>
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-price">{product.price}</div>
                <div className="product-sold">
                  ⭐ terjual {product.sold}
                </div>
              </div>
              <button className="add-to-cart-btn">+</button>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column - Cart Section */}
      <div className="cart-section">
        <div className="cart-header">
          <span className="cart-icon">🛒</span>
          <h2 className="cart-title">Keranjang</h2>
        </div>

        {/* Cart Items */}
        <div className="cart-items">
          <div className="cart-item">
            <div className="select-circle"></div>
            <div className="cart-item-image-wrapper">
              <img 
                src={productImageUrl}
                alt="Poop Bags in Cart" 
                className="cart-item-image"
              />
            </div>
            <div className="cart-item-details">
              <h4>Plastik Kotoran Hewan PUP POOP BAG</h4>
              <p>Biodegradable Compostable 16 PCS - isi 10</p>
              <span>Tersisa 30</span>
            </div>
          </div>
        </div>

        {/* Cart Footer */}
        <div className="cart-footer">
          <div className="promo-button">
            <span className="promo-icon">🏷️</span>
            <span>Pake promo agar lebih hemat!</span>
          </div>
          <div className="total-section">
            <div className="total-row">
              <span>Total harga</span>
              <span>-</span>
            </div>
            <button className="checkout-btn">Beli</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetshopStore;
