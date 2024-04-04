import "./Error.scss";
import { Link } from "react-router-dom";
const Error = () => {
    return (
      <section id="Error" className="Error">
        <div className="container">
          <h3>- Error -</h3>
          <h1 className="title">404</h1>

          <h4>Oops! Page not found</h4>

          <p>We are sorry, but the page you requested was not found</p>

          <Link to="/" className="homepage">
            Go to Homepage
          </Link>
        </div>
      </section>
    );
};

export default Error;