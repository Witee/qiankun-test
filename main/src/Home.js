import React from 'react';

function Home() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 600,
        fontSize: '20px',
        marginTop: '40px',
      }}
    >
      <h1>
        <span role="img" aria-label="welcome">
          🎉
        </span>
        Welcome!
      </h1>
    </div>
  );
}

export default Home;
