import React from 'react';
const current_stars = 5;

const UserDashboard: React.FC = () => {
  return (
    <div style={containerStyle}>
      <h1>Greetings, Shen3340</h1>
      <h2 className="stars">{"✯".repeat(current_stars)}</h2>
    </div>
  );
};

// Inline styles for quick styling (you can use CSS instead)
const containerStyle: React.CSSProperties = {
  textAlign: 'center',
  padding: '20px',
  fontFamily: 'Arial, sans-serif'
};

export default UserDashboard;
