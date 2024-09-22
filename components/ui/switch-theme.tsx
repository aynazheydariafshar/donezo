"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./button";

export default function SwitchTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex justify-center">
      <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? <Moon /> : <Sun />}
      </Button>
    </div>
  );
}
