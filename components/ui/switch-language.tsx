"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

export default function SwitchLanguage() {
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const cleanPathname = pathname.replace(/^\/(en|fa)(\/|$)/, "/");

  function handleChangeLang(value: ChangeEvent<HTMLSelectElement>) {
    if (pathname.startsWith("/fa") || pathname.startsWith("/en")) {
      router.replace(`/${value}${cleanPathname}`);
    } else {
      router.replace(`${value}`);
    }
  }

  return (
    <Select
      onValueChange={(value) => handleChangeLang(value)}
      defaultValue={currentLocale}
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
