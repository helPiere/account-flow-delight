
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check for user's preferred color scheme on initial render
  useEffect(() => {
    // Check if user has previously set a theme preference
    const storedTheme = localStorage.getItem("theme");
    
    // Check if user prefers dark mode in their OS settings
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    // Set the initial dark mode value based on stored preference or OS setting
    setIsDarkMode(storedTheme === "dark" || (!storedTheme && prefersDark));
    
    // Apply the theme to the document
    applyTheme(storedTheme === "dark" || (!storedTheme && prefersDark));
  }, []);

  // Apply the theme to the document
  const applyTheme = (isDark: boolean) => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Toggle the theme
  const toggleTheme = () => {
    const newDarkModeValue = !isDarkMode;
    setIsDarkMode(newDarkModeValue);
    applyTheme(newDarkModeValue);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      title={isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      aria-label={isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
    >
      {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
    </Button>
  );
};

export default ThemeToggle;
