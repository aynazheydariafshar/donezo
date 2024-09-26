// component ui
import { Logo } from "@/components/logo";
import { SwitchLanguage } from "@/components/switch-language";
import { SwitchTheme } from "@/components/switch-theme";
import { Button } from "@/components/ui/button";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

function NavbarHomePage() {
  const t = useTranslations();
  const local = useLocale();
  return (
    <div className="fixed top-0 w-full  flex items-center justify-between px-11 h-16 shadow-sm bg-black black:bg-white bg-opacity-35 z-50">
      <div>
        <Logo showTextLogo />
      </div>
      <div className="flex items-center space-x-3">
        <Button size="sm" asChild>
          <Link href={`/${local}/sign-in`}>{t("login")}</Link>
        </Button>
        <Button variant="secondary" size="sm" asChild>
          <Link href="/">{t("go-to-your-boards")}</Link>
        </Button>
        <SwitchTheme />
        <SwitchLanguage />
      </div>
    </div>
  );
}

export { NavbarHomePage };
