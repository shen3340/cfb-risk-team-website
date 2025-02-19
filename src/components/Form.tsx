const Form = () => {

  const handleLoginClick = () => {
    window.location.href =
      "https://discord.com/oauth2/authorize?client_id=1341159037881815103&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Fcfb-risk-team-website%2Fdashboard&scope=identify";
  };
  

  return (
    <div>
      <button onClick={handleLoginClick}>Sign In (skipping auth for now)</button>
    </div>
  );
};

export default Form;
