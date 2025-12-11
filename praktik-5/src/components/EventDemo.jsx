import React, { useState, useRef } from 'react'

export default function EventDemo() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('Belum ada event')
  const inputRef = useRef(null)

  // click handler sederhana
  function handleClick() {
    setCount(prev => prev + 1)
    setMessage('Tombol diklik!')
  }

  // double click
  function handleDoubleClick() {
    setMessage('Double click terdeteksi!')
  }

  // mouse enter / leave
  function handleMouseEnter() {
    setMessage('Kursor berada di atas area ini')
  }
  function handleMouseLeave() {
    setMessage('Kursor meninggalkan area')
  }

  // keyboard event pada input
  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      setMessage(`Enter ditekan — value: "${inputRef.current.value}"`)
      inputRef.current.blur()
    }
  }

  // contoh event bubbling / stopPropagation
  function parentClick() {
    setMessage('Klik di parent')
  }
  function childClick(e) {
    e.stopPropagation()
    setMessage('Klik di child (stopPropagation)')
  }

  return (
    <div className="event-demo">
      <div className="controls">
        <button onClick={handleClick} onDoubleClick={handleDoubleClick}>
          Klik saya ({count})
        </button>

        <div
          className="hover-box"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Hover di sini
        </div>

        <input
          ref={inputRef}
          placeholder="Ketik lalu tekan Enter"
          onKeyDown={handleKeyDown}
        />

        <div className="parent-box" onClick={parentClick} style={{ marginTop: 10 }}>
          Parent (klik di sini)
          <div className="child-box" onClick={childClick}>
            Child (klik saya, event tidak bubblen ke parent)
          </div>
        </div>
      </div>

      <div className="result">
        <strong>Status:</strong>
        <p>{message}</p>
      </div>
    </div>
  )
}
