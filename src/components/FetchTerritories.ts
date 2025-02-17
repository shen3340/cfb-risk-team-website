import { useState, useEffect } from "react";
const FetchTerritories = () => {
  const [territories, setTerritories] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

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

  return { territories, error };
};

export default FetchTerritories;