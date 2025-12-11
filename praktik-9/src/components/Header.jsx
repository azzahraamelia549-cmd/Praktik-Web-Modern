import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const { theme } = useTheme();

  return (
    <header className={`header ${theme}`}>
      <div className="header-content">
        <div className="logo">
          <h1>React Shop</h1>
        </div>

        <nav className="nav">
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header;
