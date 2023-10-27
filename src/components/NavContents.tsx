"use client";
import { useTheme } from "next-themes";
import { FC } from "react";
import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "lucide-react";

interface IThemeSelector {}

const ThemeSelector: FC<IThemeSelector> = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      variant="ghost"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};
export default ThemeSelector;
