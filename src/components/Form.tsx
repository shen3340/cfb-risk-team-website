import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/cfb-risk-team-website/dashboard"); // Redirect to the AnotherPage route
  };

  return (
    <div>
      <h2>Form Page</h2>
      <button onClick={handleClick}>Go to Another Page</button>
    </div>
  );
};

export default Form;
