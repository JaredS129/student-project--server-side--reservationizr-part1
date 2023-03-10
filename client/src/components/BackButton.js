import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <p className="center">
      <Link to="/" className="btn">
        &larr; Back to reservations
      </Link>
    </p>
  );
};

export default BackButton;