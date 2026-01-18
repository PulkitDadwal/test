import React from 'react'

function App() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
      gap: '20px'
    }}>
      <div style={{
        width: '100px',
        height: '100px',
        backgroundColor: 'yellow'
      }}></div>
      <div style={{
        width: '100px',
        height: '100px',
        backgroundColor: 'blue'
      }}></div>
    </div>
  )
}

export default App

