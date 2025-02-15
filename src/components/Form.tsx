import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/cfb-risk-team-website/dashboard"); // Redirect to the AnotherPage route
  };

  return (
    <div>
      <button onClick={handleClick}>Sign In (skipping auth for now)</button>
    </div>
  );
};

export default Form;
