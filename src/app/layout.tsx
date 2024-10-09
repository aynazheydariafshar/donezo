import type { Metadata } from "next";
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";

// style
import "../../styles/globals.css";

// fonts
import { Fredoka, Vazirmatn } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

const fredoka = Fredoka({
  weight: "500",
  subsets: ["latin"],
});

const vazirmatn = Vazirmatn({
  weight: "500",
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "Donezo",
  description:
    "Donezo gives you everything you need to stay organized and achieve your goals.",
  icons: [
    {
      url: "/images/favicon.ico",
      href: "/images/favicon.ico",
    },
  ],
};

async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <html dir={locale === "en" ? "ltr" : "rtl"} lang={locale}>
      <body
        className={`${
          locale === "en" ? fredoka.className : vazirmatn.className
        } antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
        <Toaster />
      </body>
    </html>
  );
}

export default RootLayout;
