import { ClerkProvider } from "@clerk/nextjs";
import { enUS } from "@clerk/localizations";
import { RootLayoutProps } from "../layout";

// json
import faLocalization from "../../../messages/clerk-fa.json"; // Import custom localization file

export default function PlatformLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  const localization = locale === "fa" ? faLocalization : enUS;
  return <ClerkProvider localization={localization}>{children}</ClerkProvider>;
}
