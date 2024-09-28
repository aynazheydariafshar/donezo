import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

// component ui
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";

function NavbarHomePage({ showBtn = false }) {
  const t = useTranslations();
  const local = useLocale();
  return (
    <Navbar>
      {showBtn && (
        <>
          <Button size="sm" asChild>
            <Link href={`/${local}/sign-in`}>{t("login")}</Link>
          </Button>
          <Button variant="secondary" size="sm" asChild>
            <Link href="/">{t("go-to-your-boards")}</Link>
          </Button>
        </>
      )}
      <Button variant="secondary" size="sm" asChild>
        <Link href={`/${local}/select-org`}>sss</Link>
      </Button>
    </Navbar>
  );
}

export { NavbarHomePage };
