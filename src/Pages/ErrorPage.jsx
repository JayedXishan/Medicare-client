import { Helmet } from "react-helmet-async";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex justify-center items-center h-screen">
      <Helmet>
        <title>Medicare | Error</title>
      </Helmet>
      <div className="text-center p-10 rounded-2xl bg-slate-200">
        <img className="w-[300px] h-[250px] mb-4" src="https://i.ibb.co/bHS4WGk/7887410-3793096.jpg" alt="" />
        <h1 className="text-4xl font-extrabold">404 Error!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}