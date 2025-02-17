import { useEffect, useState } from "react";

const ConfirmationPage: React.FC = () => {
  const [selectedTerritory, setSelectedTerritory] = useState<string | null>(null);
  const [selectedUsername, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const storedTerritory = localStorage.getItem("selectedTerritory");
    const storedUsername = localStorage.getItem("selectedUsername");
    setUsername(storedUsername);
    setSelectedTerritory(storedTerritory);
  }, []);

  return (
    <div style={containerStyle}>
      <h1>Confirmation</h1>
      <h2>Thank you, <strong>{selectedUsername}</strong></h2>
      <p>You chose <strong>{selectedTerritory || "No Territory Selected"}</strong></p>
    </div>
  );
};

// Styles
const containerStyle: React.CSSProperties = {
  textAlign: "center",
  padding: "50px",
  fontFamily: "Arial, sans-serif",
};



export default ConfirmationPage;
