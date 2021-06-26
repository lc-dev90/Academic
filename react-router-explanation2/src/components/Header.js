import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <h1>React Router Tutorial</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Profile">Profile</Link>
        </li>
      </ul>
    </>
  );
};

export default Header;
