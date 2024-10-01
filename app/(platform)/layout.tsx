import { ClerkProvider } from "@clerk/nextjs";
import { enUS } from "@clerk/localizations";

// json
import faLocalization from "../../messages/clerk-fa.json"; // Import custom localization file
import React from "react";
import { getLocale } from "next-intl/server";

export default async function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const localization = locale === "fa" ? faLocalization : enUS;
  return <ClerkProvider localization={localization}>{children}</ClerkProvider>;
}
