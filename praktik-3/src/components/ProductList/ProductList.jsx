// src/components/ProductList/ProductList.jsx
import React from "react";
import "./ProductList.css";

function ProductList({ products }) {
  return (
    <div className="product-list">
      <h2>Katalog Produk</h2>
      <div className="product-grid">
        {products.map((item, index) => (
          <div key={index} className="product-card">
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p>Rp {item.price.toLocaleString("id-ID")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
