import { Link } from "react-router-dom";

export default function Products() {
  const data = [
    { id: 1, name: "Laptop", price: "Rp 10.000.000" },
    { id: 2, name: "Smartphone", price: "Rp 5.000.000" },
    { id: 3, name: "Headphone", price: "Rp 1.500.000" },
  ];

  return (
    <section>
      <h2>Daftar Produk</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <Link to={`/products/${item.id}`}>{item.name}</Link> - {item.price}
          </li>
        ))}
      </ul>
    </section>
  );
}
