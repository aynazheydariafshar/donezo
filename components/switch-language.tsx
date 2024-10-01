"use client";

import { useEffect, useState } from "react";

// component-ui
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

import setLanguageValue from "@/lib/set-language-action";

function SwitchLanguage() {
  const [locale, setLocale] = useState<string>("en");

  // get language from cookie to set value on language select
  useEffect(() => {
    const getCookie = (name: string): string | null => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) {
        return parts.pop()?.split(";")[0] || null;
      }
      return null;
    };
    const cookieLocale = getCookie("language");
    if (cookieLocale) setLocale(cookieLocale);
  }, []);

  return (
    <Select
      onValueChange={(value) => {
        setLanguageValue(value);
        setLocale(value);
      }}
      value={locale}
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
