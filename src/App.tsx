import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import './stylesheet.css'; 


const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Form />
    </div>
  );
};

export default App;
