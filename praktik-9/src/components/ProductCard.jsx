import { useCart } from "../context/CartContext";
import { useTheme } from "../context/ThemeContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { theme } = useTheme();

  return (
    <div className={`product-card ${theme}`}>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="description">{product.description}</p>
        <p className="price">Rp {product.price.toLocaleString()}</p>
      </div>

      <button className="btn btn-primary" onClick={() => addToCart(product)}>
        Tambah ke Keranjang
      </button>
    </div>
  );
};

export default ProductCard;
