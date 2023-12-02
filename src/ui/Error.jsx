import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();

  console.error(error);

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>
        <i>{error.data || error.message}</i>
      </p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default Error;
