import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import navigation

const UserDashboard: React.FC = () => {
  const [username, setUsername] = useState<string>("shen3340$0");
  const [currentStars, setCurrentStars] = useState<number>(1);
  const [currentDate, setCurrentDate] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [territories, setTerritories] = useState<string[]>([]);
  
  const navigate = useNavigate(); // Initialize navigation

  useEffect(() => {
    const today = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setCurrentDate(today);
  }, []);

  useEffect(() => {
    if (!username) return;

    const fetchPlayerData = async () => {
      try {
        setError(null);
        const response = await fetch(
          `https://dough.collegefootballrisk.com/api/player?player=${encodeURIComponent(username)}`
        );
        if (!response.ok) throw new Error("Failed to fetch player data");

        const data = await response.json();
        const { totalTurns, gameTurns, mvps, streak } = data.stats;

        const starsCalculator = new Stars();
        const calculatedStars = starsCalculator.countStars(
          totalTurns,
          gameTurns,
          mvps,
          streak
        );

        setCurrentStars(calculatedStars);
      } catch (err) {
        setError("Error fetching player data.");
        console.error(err);
      }
    };

    fetchPlayerData();
  }, [username]);

  useEffect(() => {
    const fetchTerritories = async () => {
      try {
        const response = await fetch(
          "https://dough.collegefootballrisk.com/api/territories?day=27&season=5"
        );
        if (!response.ok) throw new Error("Failed to fetch territories");

        const data = await response.json();
        setTerritories(data.map((territory: { name: string }) => territory.name));
      } catch (err) {
        setError("Error fetching territories.");
        console.error(err);
      }
    };

    fetchTerritories();
  }, []);


const handleTerritoryClick = (territory: string, username: string) => {
  localStorage.setItem("selectedTerritory", territory); // Store selected territory
  localStorage.setItem("selectedUsername", username);
  navigate("/cfb-risk-team-website/confirmation"); // Redirect to confirmation page
};

  

  return (
    <div style={containerStyle}>
      <h1>Greetings, {username}</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
      />
      <h1 className="stars">{"✯".repeat(currentStars)}</h1>
      <h2>Today is <span>{currentDate}</span>.</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <h2>Click one of the buttons to submit your deployment, soldier!</h2>
      <h2>
        Please submit your move at{" "}
        <a href="https://collegefootballrisk.com" target="_blank" rel="noopener noreferrer">
          CollegeFootballRisk.com
        </a>
      </h2>

      {/* Territory Buttons */}
      <h2>Your Assigned Territories:</h2>
      {territories.slice(0, currentStars).map((territory, index) => (
        <button key={index} onClick={() => handleTerritoryClick(territory, username)} style={buttonStyle}>
          {territory}
        </button>
      ))}
    </div>
  );
};

// Styles
const containerStyle: React.CSSProperties = {
  textAlign: "center",
  padding: "50px",
  fontFamily: "Arial, sans-serif",
};

const buttonStyle: React.CSSProperties = {
  display: "block",
  margin: "10px auto",
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "5px",
};

// Class for calculating stars remains unchanged
class Stars {
  countStars(totalTurns: number, gameTurns: number, mvps: number, streak: number): number {
    const star1 = this.totalTurnStars(totalTurns);
    const star2 = this.gameTurnStars(gameTurns);
    const star3 = this.mvpStars(mvps);
    const star4 = this.streakStars(streak);
    return Math.ceil(this.median([star1, star2, star3, star4]));
  }

  private median(values: number[]): number {
    values.sort((a, b) => a - b);
    const mid = Math.floor(values.length / 2);
    return values.length % 2 !== 0 ? values[mid] : (values[mid - 1] + values[mid]) / 2;
  }

  private streakStars(streak: number): number {
    return streak > 24 ? 5 : streak > 9 ? 4 : streak > 4 ? 3 : streak > 2 ? 2 : 1;
  }

  private mvpStars(mvps: number): number {
    return mvps > 24 ? 5 : mvps > 9 ? 4 : mvps > 4 ? 3 : mvps > 0 ? 2 : 1;
  }

  private gameTurnStars(gameTurns: number): number {
    return gameTurns > 39 ? 5 : gameTurns > 24 ? 4 : gameTurns > 9 ? 3 : gameTurns > 4 ? 2 : 1;
  }

  private totalTurnStars(totalTurns: number): number {
    return totalTurns > 99 ? 5 : totalTurns > 49 ? 4 : totalTurns > 24 ? 3 : totalTurns > 9 ? 2 : 1;
  }
}

export default UserDashboard;
