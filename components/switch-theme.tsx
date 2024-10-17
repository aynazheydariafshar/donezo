"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

//icons
import { Moon, Sun } from "lucide-react";

//component-ui
import { Button } from "./ui/button";
import { setCookie } from "@/utils/set-cookie";

function SwitchTheme() {
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
        className="p-0 hover:bg-transparent hover:text-secondary-400"
        onClick={() => {
          const themeValue = theme === "dark" ? "light" : "dark";
          setCookie(themeValue, "theme");
          setTheme(themeValue);
        }}
      >
        {theme === "dark" ? <Moon /> : <Sun />}
      </Button>
    </div>
  );
}

export { SwitchTheme };
