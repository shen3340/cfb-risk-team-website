import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FetchPlayerData from "./FetchPlayerData"; // Import custom hook
import FetchTerritories from "./FetchTerritories"; // Import custom hook
import '../stylesheet.css';

const UserDashboard: React.FC = () => {
  const [username, setUsername] = useState<string>("shen3340$0");
  const [currentDate, setCurrentDate] = useState<string>("");
  
  const { currentStars, error: playerError } = FetchPlayerData(username);
  const { territories, error: territoriesError } = FetchTerritories();
  
  const navigate = useNavigate(); // Initialize navigation

  useEffect(() => {
    const today = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setCurrentDate(today);
  }, []);

  const handleTerritoryClick = (territory: string) => {
    localStorage.setItem("selectedTerritory", territory); // Store selected territory
    localStorage.setItem("selectedUsername", username);
    navigate("/cfb-risk-team-website/confirmation"); // Redirect to confirmation page
  };

  return (
    <div className="container">
      <h1>Greetings, {username}</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
      />
      <h1 className="stars">{"✯".repeat(currentStars)}</h1>
      <h3>Today is <span>{currentDate}</span>.</h3>
      {(playerError || territoriesError) && <p style={{ color: "red" }}>{playerError || territoriesError}</p>}
      <h3>Click one of the buttons to submit your deployment, soldier!</h3>
      {territories.slice(0, currentStars).map((territory, index) => (
        <button key={index} onClick={() => handleTerritoryClick(territory)} className="button">
          {territory}
        </button>
      ))}
      <h3>
        Please submit your move at{" "}
        <a href="https://collegefootballrisk.com" target="_blank" rel="noopener noreferrer">
          CollegeFootballRisk.com
        </a>
      </h3>
    </div>
  );
};

export default UserDashboard;