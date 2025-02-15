import React, { useState, useEffect } from "react";
const current_stars = 5;
const UserDashboard: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<string>("");

  useEffect(() => {
    const today = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setCurrentDate(today);
  }, []);

  return (
    <div style={containerStyle}>
      <h1>Greetings, Shen3340</h1>
      <h1 className="stars">{"✯".repeat(current_stars)}</h1>
      <h2>Today is <span>{currentDate}</span></h2>
      <h2>Click one of the buttons to choose your deployment, solider!</h2>
      <h2>
      Visit <a href="https://collegefootballrisk.com" target="_blank" rel="noopener noreferrer">CollegeFootballRisk.com</a>
    </h2>
    </div>
  );
};


// Inline styles for quick styling (you can use CSS instead)
const containerStyle: React.CSSProperties = {
  textAlign: 'center',
  padding: '200px',
  fontFamily: 'Arial, sans-serif'
};

export default UserDashboard;
