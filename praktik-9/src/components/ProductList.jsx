import ProductCard from "./ProductCard";
import { useTheme } from "../context/ThemeContext";

const ProductList = () => {
  const { theme } = useTheme();

  const products = [
    { id: 1, name: "Kaos Hitam", price: 50000, description: "Kaos bahan cotton." },
    { id: 2, name: "Hoodie", price: 150000, description: "Hoodie nyaman." },
    { id: 3, name: "Topi", price: 30000, description: "Topi keren." },
  ];

  return (
    <div className={`product-list ${theme}`}>
      <h2>Produk</h2>

      <div className="products-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
