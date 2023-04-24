import { useContext } from "react";
import "./index.css";
import ThemeContext from "../../context/ThemeContext";

type Props = {
  text: string;
};

const LetterSplitter = ({ text }: Props) => {
  const { isLightOn } = useContext(ThemeContext);
  const textSplitted = text.split("");

  return (
    <div className={`letter-splitter ${isLightOn ? "light" : "dark"}`}>
      {textSplitted.map((letter) => (
        <span className="letter">{letter}</span>
      ))}
    </div>
  );
};

export default LetterSplitter;
