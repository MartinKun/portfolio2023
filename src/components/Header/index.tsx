import { Link } from "react-router-dom";
import Container from "../Container";
import Logo from "../Logo";
import "./index.css";
import HamburguerMenu from "../HamburguerMenu";
import { useContext, useState } from "react";
import ThemeContext from "../../context/ThemeContext";

const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const { isLightOn } = useContext(ThemeContext);

  return (
    <nav>
      <Container>
        <div
          className={`nav-content ${isLightOn ? "light" : "dark"} ${
            !isMenuOpened && "close"
          }`}
        >
          <div>
            <Logo />
          </div>
          <ul>
            <li>
              <Link to="/" onClick={() => setIsMenuOpened(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsMenuOpened(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/portfolio" onClick={() => setIsMenuOpened(false)}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsMenuOpened(false)}>
                Contact
              </Link>
            </li>
            <div className="languages">
              <span onClick={() => setIsMenuOpened(false)}>EN</span>
              <span onClick={() => setIsMenuOpened(false)}>ES</span>
            </div>
          </ul>
          <HamburguerMenu
            setIsMenuOpened={setIsMenuOpened}
            isMenuOpened={isMenuOpened}
          />
        </div>
      </Container>
    </nav>
  );
};

export default Header;
