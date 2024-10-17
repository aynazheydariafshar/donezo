import { ClerkLoaded, ClerkLoading, ClerkProvider } from "@clerk/nextjs";
import { enUS } from "@clerk/localizations";
import { dark, experimental__simple } from "@clerk/themes";

// json
import faLocalization from "../../../messages/clerk-fa.json"; // Import custom localization file
import React from "react";
import { getLocale } from "next-intl/server";
import "../../../styles/clerk.css";
import { cookies } from "next/headers";
import ReactQueryProvider from "@/provider/react-query-provider";
import { Loader } from "lucide-react";

export default async function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = cookies().get("theme")?.value || "dark";

  const locale = await getLocale();
  const localization = locale === "fa" ? faLocalization : enUS;
  return (
    <ClerkProvider
      appearance={{
        variables: { colorPrimary: "#ff784e" },
        baseTheme: theme === "dark" ? dark : experimental__simple,
      }}
      localization={localization}
    >
      <ClerkLoading>
        <div className="bg-minimal-gradient dark:bg-minimal-gradient-dark h-screen flex justify-center items-center w-full">
          <Loader className="animate-spin h-20 w-20 text-secondary-400" />
        </div>
      </ClerkLoading>
      <ClerkLoaded>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </ClerkLoaded>
    </ClerkProvider>
  );
}
