import React from 'react';

function HeroImage({ imageUrl, text }) {
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        fontSize: '3rem',
        fontWeight: 'bold'
      }}
    >
      {text && <div>{text}</div>}
    </div>
  );
}

export default HeroImage;
