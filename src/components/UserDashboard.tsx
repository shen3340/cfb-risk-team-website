import React from 'react';

const UserDashboard: React.FC = () => {
  return (
    <div style={containerStyle}>
      <h1>Welcome, User!</h1>
      <p>You are logged in, but you are not an admin.</p>
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
