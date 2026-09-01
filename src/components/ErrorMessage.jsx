import React from 'react';

const ErrorMessage = ({ message, onRetry }) => (
  <div style={{
    maxWidth: '500px',
    margin: '60px auto',
    padding: '24px',
    textAlign: 'center',
    border: '1px solid #d1242f',
    backgroundColor: '#ffebe9',
    borderRadius: '6px',
    fontFamily: 'sans-serif'
  }}>
    <h3 style={{ color: '#d1242f', margin: '0 0 8px 0' }}>💥 Asynchronous Request Failed</h3>
    <p style={{ color: '#57606a', fontSize: '14px', margin: '0 0 20px 0' }}>{message}</p>
    
    {onRetry && (
      <button 
        onClick={onRetry} 
        style={{
          padding: '10px 20px',
          backgroundColor: '#0969da',
          color: '#ffffff',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: 'bold'
        }}
      >
        Retry Fetching Data
      </button>
    )}
  </div>
);

export default ErrorMessage;
