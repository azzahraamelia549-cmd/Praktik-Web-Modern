import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Semua route diatur dalam layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="thank-you" element={<h2>Terima kasih telah menghubungi kami!</h2>} />
          <Route path="*" element={<h2>404 - Halaman Tidak Ditemukan</h2>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
