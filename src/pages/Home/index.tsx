import Container from "../../components/Container";
import "./index.css";
import RoomImage from "../../components/RoomImage";
import LetterSplitter from "../../components/LetterSplitter";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

const Home = () => {
  const { isLightOn } = useContext(ThemeContext);
  return (
    <Container>
      <div className="home">
        <div className={`title-column ${isLightOn ? "light" : "dark"}`}>
          <h1>
            <span>Martín </span>Kun
          </h1>
          <LetterSplitter text="backend developer" />
        </div>
        <RoomImage />
      </div>
    </Container>
  );
};

export default Home;
