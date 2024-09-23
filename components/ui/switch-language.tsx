"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent } from "react";

export default function SwitchLanguage() {
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const cleanPathname = pathname.replace(/^\/(en|fa)(\/|$)/, "/");

  function handleChangeLang(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    if (pathname.startsWith("/fa") || pathname.startsWith("/en")) {
      router.replace(`/${nextLocale}${cleanPathname}`);
    } else {
      router.replace(`${nextLocale}`);
    }
  }

  return (
    <select onChange={(e) => handleChangeLang(e)} defaultValue={currentLocale}>
      <option value="en">en</option>
      <option value="fa">fa</option>
    </select>
  );
}
