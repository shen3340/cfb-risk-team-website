import React from 'react';
import { useNavigate } from 'react-router-dom';

const Form: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Redirect to dashboard after "login"
    navigate('/dashboard');
  };

  return (
    <div>
      <button onClick={handleLogin} style={buttonStyle}>
        Sign in (Skipping Auth)
      </button>
    </div>
  );
};

const buttonStyle: React.CSSProperties = {
  backgroundColor: '#5865F2',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  fontSize: '16px',
  borderRadius: '5px',
  cursor: 'pointer'
};

export default Form;
