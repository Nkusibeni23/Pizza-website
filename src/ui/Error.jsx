import {  useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function Error() {

  const error = useRouteError();

  console.error(error);

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>
        <i>{error.data || error.message}</i>
      </p>
      <LinkButton to="-1">&larr; Go Back</LinkButton>
    </div>
  );
}

export default Error;
