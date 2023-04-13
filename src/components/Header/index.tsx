import { Link } from "react-router-dom";
import Container from "../Container";
import Logo from "../Logo";
import "./index.css";

const Header = () => {
  return (
    <nav>
      <Container>
        <div className="nav-content">
          <div>
            <Logo />
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <div className="languages">
              <span>EN</span>
              <span>ES</span>
            </div>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Header;
