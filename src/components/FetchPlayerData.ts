import { useState, useEffect } from "react";
import Stars from "./Stars";

const FetchPlayerData = (username: string) => {
  const [currentStars, setCurrentStars] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);

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

  return { currentStars, error };
};

export default FetchPlayerData;
