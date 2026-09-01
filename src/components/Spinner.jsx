import React from 'react';

const Spinner = () => (
  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
    <div style={{
      border: '4px solid #e1e4e8',
      borderTop: '4px solid #0969da',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      animation: 'spin 0.8s linear infinite'
    }} />
    <p style={{ marginTop: '15px', color: '#57606a', fontFamily: 'sans-serif', fontSize: '14px' }}>
      Connecting to GitHub API servers...
    </p>
    <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
  </div>
);

export default Spinner;
