import "./index.css";

type Props = {
  setIsMenuOpened: React.Dispatch<React.SetStateAction<boolean>>;
  isMenuOpened: boolean;
};

const HamburguerMenu = ({ setIsMenuOpened, isMenuOpened }: Props) => {
  return (
    <div className="toggleHamburguer">
      {!isMenuOpened && (
        <div
          className="hamburguer darkmode"
          onClick={() => setIsMenuOpened(true)}
        >
          <div className="firstLineHamburguer"></div>
          <div className="secondLineHamburguer"></div>
          <div className="thirdLineHamburguer"></div>
        </div>
      )}
      {isMenuOpened && (
        <div
          className="hamburguer darkmode"
          onClick={() => setIsMenuOpened(false)}
        >
          <div className="firstLineClosed"></div>
          <div className="secondLineClosed"></div>
          <div className="thirdLineClosed"></div>
        </div>
      )}
    </div>
  );
};

export default HamburguerMenu;
