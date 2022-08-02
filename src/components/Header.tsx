import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <Link to="/">
        <h1>Mad Libs</h1>
      </Link>
      <ul>
        <li>
          <Link to="/stories">See Saved Stories</Link>
        </li>
        <li>
          <Link to="/create-story">Create a new story</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
