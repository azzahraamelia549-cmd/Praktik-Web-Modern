import React, { useState } from "react";
import Header from "./components/Header/Header";
import UserCard from "./components/UserCard/UserCard";
import ProductList from "./components/ProductList/ProductList";
import Button from "./components/Button/Button";
import "./App.css";

function App() {
  // Data awal pengguna
  const [users, setUsers] = useState([
    { name: "Eci", email: "eci@example.com", role: "Admin", avatar: "https://i.pravatar.cc/100" },
  ]);

  const products = [
    { name: "Laptop", price: 12000000, image: "https://picsum.photos/200/120?1" },
    { name: "Headphone", price: 250000, image: "https://picsum.photos/200/120?2" },
    { name: "Keyboard", price: 350000, image: "https://picsum.photos/200/120?3" },
  ];

  // State untuk form tambah/edit
  const [showForm, setShowForm] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [newUser, setNewUser] = useState({ name: "", email: "", role: "" });

  // Buka form tambah
  const handleAddUserClick = () => {
    setShowForm(true);
    setEditingIndex(null);
    setNewUser({ name: "", email: "", role: "" });
  };

  // Isi form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  // Simpan pengguna baru atau hasil edit
  const handleSaveUser = (e) => {
    e.preventDefault();
    if (!newUser.name || !newUser.email || !newUser.role) {
      alert("Lengkapi semua data pengguna!");
      return;
    }

    if (editingIndex !== null) {
      const updatedUsers = [...users];
      updatedUsers[editingIndex] = { ...users[editingIndex], ...newUser };
      setUsers(updatedUsers);
    } else {
      const newUserData = {
        ...newUser,
        avatar: `https://i.pravatar.cc/100?u=${Date.now()}`,
      };
      setUsers([...users, newUserData]);
    }

    setNewUser({ name: "", email: "", role: "" });
    setShowForm(false);
    setEditingIndex(null);
  };

  // Edit pengguna
  const handleEdit = (index) => {
    const userToEdit = users[index];
    setNewUser({ name: userToEdit.name, email: userToEdit.email, role: userToEdit.role });
    setEditingIndex(index);
    setShowForm(true);
  };

  // Hapus pengguna
  const handleDelete = (index) => {
    if (window.confirm("Yakin ingin menghapus pengguna ini?")) {
      const updatedUsers = users.filter((_, i) => i !== index);
      setUsers(updatedUsers);
    }
  };

  return (
    <div className="app">
      <Header title="Praktik Pertemuan 3 - React Components" />

      {/* ====== BAGIAN MANAJEMEN PENGGUNA ====== */}
      <section className="user-management">
        <h2 className="section-title">Manajemen Pengguna</h2>

        <div className="user-section">
          {users.map((user, index) => (
            <UserCard
              key={index}
              name={user.name}
              email={user.email}
              role={user.role}
              avatar={user.avatar}
              onEdit={() => handleEdit(index)}
              onDelete={() => handleDelete(index)}
            />
          ))}
        </div>

        <div className="button-section center-button">
          {!showForm && <Button label="Tambah Pengguna" onClick={handleAddUserClick} />}
        </div>

        {showForm && (
          <form className="user-form" onSubmit={handleSaveUser}>
            <input
              type="text"
              name="name"
              placeholder="Nama pengguna"
              value={newUser.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email pengguna"
              value={newUser.email}
              onChange={handleChange}
            />
            <select name="role" value={newUser.role} onChange={handleChange}>
              <option value="">-- Pilih Peran --</option>
              <option value="Admin">Admin</option>
              <option value="User">User</option>
              <option value="Dosen">Dosen</option>
              <option value="Mahasiswa">Mahasiswa</option>
            </select>
            <button type="submit" className="custom-button">
              {editingIndex !== null ? "Simpan Perubahan" : "Simpan"}
            </button>
          </form>
        )}
      </section>

      {/* ====== BAGIAN KATALOG PRODUK ====== */}
      <section className="product-management">
        <h2 className="section-title">Katalog Produk</h2>
        <div className="product-section">
          <ProductList products={products} />
        </div>
        <div className="button-section center-button">
          <Button label="Tambah Produk" onClick={() => alert("Tambah produk belum diaktifkan")} />
        </div>
      </section>
    </div>
  );
}

export default App;
