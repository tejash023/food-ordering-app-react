import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="container">
      <h1>Oops!!</h1>
      <h2>Something went wrong</h2>
      <p>{err.status + " : " + err.statusText}</p>
      <button className="error-button">
        <Link to="/">Back to Home</Link>
      </button>
    </div>
  );
};

export default Error;
