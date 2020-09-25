import React from 'react';

export default function App() {
  const backgroundColor = '#000'; // '#efeae9';
  const mainColor = '#f85e0d';

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'grid',
        justifyContent: 'center',
        alignContent: 'center',
        gridTemplateColumns: 'auto',
        backgroundColor,
        margin: -8,
        padding: 0,
        color: '#e0e0e0',
      }}
    >
      Simple Weather App
    </div>
  );
}
