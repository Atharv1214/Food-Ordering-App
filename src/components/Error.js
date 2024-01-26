import { useRouteError } from "react-router-dom";

const Error = () => {

    const err = useRouteError();
    console.log(err)
  return (
    <div>
        <h1>Oppsss!!!</h1>
        <h2>Something went wrong</h2>
        <h1>{err.status}</h1>
    </div>
  )
}

export default Error;