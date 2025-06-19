import {Link} from "react-router-dom";
const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 font-amaranth">404</h1>
        <p className="text-xl mb-8">Oops! Page not found</p>
        <button
          className="btn btn-primary"
          onClick={() => window.history.back()}
        >
          Go Back
        </button>
        <Link to="/" className="btn btn-secondary ml-4">
          Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
