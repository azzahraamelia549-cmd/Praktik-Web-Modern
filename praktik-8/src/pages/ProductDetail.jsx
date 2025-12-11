import { useParams, Link } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();

  const products = [
    { id: 1, name: "Laptop", desc: "Laptop performa tinggi dengan prosesor terbaru." },
    { id: 2, name: "Smartphone", desc: "Ponsel cerdas dengan kamera terbaik di kelasnya." },
    { id: 3, name: "Headphone", desc: "Headphone nirkabel dengan kualitas suara premium." },
  ];

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <section>
        <h3>Produk tidak ditemukan!</h3>
        <Link to="/products">Kembali ke daftar produk</Link>
      </section>
    );
  }

  return (
    <section>
      <h2>{product.name}</h2>
      <p>{product.desc}</p>
      <Link to="/products">← Kembali ke daftar produk</Link>
    </section>
  );
}
