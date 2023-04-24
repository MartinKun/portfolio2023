import { ReactNode, createContext, useState } from "react";
import { ThemeContextType } from "./types";

const ThemeContext = createContext<ThemeContextType>({
  isLightOn: false,
  setIsLightOn: () => {},
});

type Props = { children: ReactNode };

const ThemeProvider = ({ children }: Props) => {
  const [isLightOn, setIsLightOn] = useState(false);
  return (
    <ThemeContext.Provider value={{ isLightOn, setIsLightOn }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };

export default ThemeContext;
