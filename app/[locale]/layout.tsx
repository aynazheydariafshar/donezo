import type { Metadata } from "next";
import "../globals.css";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";
import { siteConfig } from "@/config/site";

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
        <body>
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
