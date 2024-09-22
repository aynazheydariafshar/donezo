"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./button";

export default function SwitchTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <div className=" py-24 sm:py-32 flex justify-center">
      <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Change Theme
      </Button>
    </div>
  );
}
