"use client";

import { useTheme } from "next-themes";

//icons
import { Moon, Sun } from "lucide-react";

//component-ui
import { Button } from "./button";

const SwitchTheme = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex justify-center">
      <Button
        variant="ghost"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? <Moon /> : <Sun />}
      </Button>
    </div>
  );
};

export default SwitchTheme;
