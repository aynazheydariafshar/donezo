import type { Metadata } from "next";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";

// style
import "../globals.css";

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

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

const RootLayout = async ({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) => {
  const messages = await getMessages();
  return (
    <NextIntlClientProvider messages={messages}>
      <html lang={locale}>
        <body
          className={`${
            locale === "en" ? fredoka.className : vazirmatn.className
          } antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </NextIntlClientProvider>
  );
};

export default RootLayout;
