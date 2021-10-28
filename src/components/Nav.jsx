import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link className="nav-link" to="/">
        HEADBANGER
      </Link>
      <p>Punk & Metal Reviews</p>
    </nav>
  );
};

export default Nav;
