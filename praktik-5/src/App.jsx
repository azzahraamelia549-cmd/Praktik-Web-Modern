import React from 'react'
import EventDemo from './components/EventDemo'
import FormDemo from './components/FormDemo'

export default function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Praktik 5 — Event & Form Handling (React)</h1>
        <p className="subtitle">Demo interaksi: klik, hover, input, dan form terkendali</p>
      </header>

      <main className="main-grid">
        <section className="card">
          <h2>Event Handling Demo</h2>
          <EventDemo />
        </section>

        <section className="card">
          <h2>Form Handling Demo</h2>
          <FormDemo />
        </section>
      </main>

      <footer className="footer">
        <small>Praktik Pertemuan 5 • Contoh dibuat untuk pembelajaran</small>
      </footer>
    </div>
  )
}
