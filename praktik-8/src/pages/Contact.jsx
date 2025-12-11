import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/thank-you");
  };

  return (
    <section>
      <h2>Hubungi Kami</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nama:
          <input type="text" required />
        </label>
        <br />
        <label>
          Pesan:
          <textarea required></textarea>
        </label>
        <br />
        <button type="submit">Kirim</button>
      </form>
    </section>
  );
}
