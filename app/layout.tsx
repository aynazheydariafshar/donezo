import type { Metadata } from "next";
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";

// style
import "../styles/globals.css";

// config
import { siteConfig } from "@/config/site";

// fonts
import { Fredoka, Vazirmatn } from "next/font/google";

const fredoka = Fredoka({
  weight: "500",
  subsets: ["latin"],
});

const vazirmatn = Vazirmatn({
  weight: "500",
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
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
    <html lang={locale}>
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
      </body>
    </html>
  );
}

export default RootLayout;
