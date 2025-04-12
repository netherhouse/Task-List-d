/*
  [RU] Компонент ThemeToggle предоставляет кнопку для переключения между темной и светлой темами.
  При клике вызывается функция toggleTheme, которая меняет состояние темы и соответствующим образом меняет CSS-переменные.
  
  [EN] The ThemeToggle component provides a button to switch between dark and light themes.
  On click, it calls the toggleTheme function which toggles the current theme state and updates the CSS variables accordingly.
*/

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <motion.button
      className="theme-toggle"
      onClick={toggleTheme}
      whileHover={{ rotate: 180 }}
      transition={{ duration: 0.3 }}
    >
      <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
    </motion.button>
  );
}

export default ThemeToggle;
