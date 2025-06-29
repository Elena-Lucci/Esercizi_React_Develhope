import React from 'react';

export function CounterDisplay({ count }) {
  return (
    <div
      style={{
        fontSize: '30px',
        color: '#3200ff', 
      }}
    >
      Count: {count}
    </div>
  );
}
