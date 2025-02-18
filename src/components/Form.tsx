import { useState } from "react";
const Form = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginClick = () => {
    if (!isAuthenticated) {
      // Redirect to your backend's /auth/discord route if not authenticated
      window.location.href = "http://localhost:3001/auth/discord";
      setIsAuthenticated(true);
    } else {
      // Optionally, handle what happens if the user is already authenticated
      console.log("User is already authenticated");
    }
  };

  return (
    <div>
      <button onClick={handleLoginClick}>Sign In (skipping auth for now)</button>
    </div>
  );
};

export default Form;
