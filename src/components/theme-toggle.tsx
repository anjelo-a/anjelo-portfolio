"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={dark}
      className="theme-toggle"
      onClick={toggleTheme}
      type="button"
    >
      <span className="theme-toggle__track">
        <span className="theme-toggle__thumb">
          {dark ? <Moon size={14} /> : <Sun size={14} />}
        </span>
      </span>
    </button>
  );
}
