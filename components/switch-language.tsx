"use client";

// component-ui
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

import { setCookie } from "@/utils/set-cookie";
import { getCookie } from "@/utils/get-cookies";
import { useEffect } from "react";

function SwitchLanguage() {
  const cookieLocale = getCookie("language") || "en";

  useEffect(() => {
    setCookie(cookieLocale, "language");
  }, []);

  return (
    <Select
      onValueChange={(value) => {
        setCookie(value, "language");
      }}
      value={cookieLocale}
    >
      <SelectTrigger className="bg-transparent w-20 border-none ring-0 focus:ring-0">
        <SelectValue placeholder="Select a timezone" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="en">en</SelectItem>
          <SelectItem value="fa">fa</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export { SwitchLanguage };
