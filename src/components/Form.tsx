const Form = () => {

  const handleLoginClick = () => {
    // Redirect to your backend's /auth/discord route
    window.location.href = "http://localhost:3001/auth/discord";
  };

  return (
    <div>
      <button onClick={handleLoginClick}>Sign In (skipping auth for now)</button>
    </div>
  );
};

export default Form;
