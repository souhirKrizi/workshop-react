import React from 'react';

const NotFound = () => {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f8f9fa'
    }}>
      <img 
        src="/images/notfound.jfif" 
        alt="404 Not Found" 
        style={{
          maxWidth: '100%',
          maxHeight: '100vh',
          objectFit: 'contain'
        }}
      />
    </div>
  );
};

export default NotFound;
