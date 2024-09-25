"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

//icons
import { Moon, Sun } from "lucide-react";

//component-ui
import { Button } from "./ui/button";

const SwitchTheme = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

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
