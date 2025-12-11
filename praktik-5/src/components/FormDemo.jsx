import React, { useState } from 'react'

const initialState = { name: '', email: '', message: '' }

export default function FormDemo() {
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(null)

  function validate(values) {
    const errs = {}
    if (!values.name.trim()) errs.name = 'Nama wajib diisi'
    if (!values.email.trim()) errs.email = 'Email wajib diisi'
    else if (!/^\S+@\S+\.\S+$/.test(values.email)) errs.email = 'Format email tidak valid'
    if (!values.message.trim()) errs.message = 'Pesan wajib diisi'
    return errs
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    setErrors(prev => ({ ...prev, [name]: undefined }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const v = validate(form)
    setErrors(v)
    if (Object.keys(v).length === 0) {
      // simulasi submit
      setSubmitted({ ...form, time: new Date().toLocaleString() })
      setForm(initialState)
    } else {
      setSubmitted(null)
    }
  }

  function handleReset() {
    setForm(initialState)
    setErrors({})
    setSubmitted(null)
  }

  return (
    <div className="form-demo">
      <form onSubmit={handleSubmit} onReset={handleReset} noValidate>
        <label>
          Nama
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Nama lengkap"
          />
          {errors.name && <small className="error">{errors.name}</small>}
        </label>

        <label>
          Email
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="email@contoh.com"
            type="email"
          />
          {errors.email && <small className="error">{errors.email}</small>}
        </label>

        <label>
          Pesan
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tuliskan pesan..."
            rows={4}
          />
          {errors.message && <small className="error">{errors.message}</small>}
        </label>

        <div className="form-actions">
          <button type="submit">Kirim</button>
          <button type="reset" className="btn-secondary">Reset</button>
        </div>
      </form>

      <div className="submission-preview">
        <h4>Preview / Hasil submit</h4>
        {submitted ? (
          <div className="submitted-card">
            <p><strong>Nama:</strong> {submitted.name}</p>
            <p><strong>Email:</strong> {submitted.email}</p>
            <p><strong>Pesan:</strong> {submitted.message}</p>
            <p className="time"><small>Waktu: {submitted.time}</small></p>
          </div>
        ) : (
          <p className="muted">Belum ada pengiriman atau data tidak valid.</p>
        )}
      </div>
    </div>
  )
}
