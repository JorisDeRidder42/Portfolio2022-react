import { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "../App";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      <Switch
        onChange={handleThemeToggle}
        checked={theme === "light"}
        uncheckedIcon={false}
        checkedIcon={false}
        onColor={"#000"}
      />
    </div>
  );
};

export default ThemeToggle;
