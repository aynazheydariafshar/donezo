import { useTranslations } from "next-intl";
import Link from "next/link";

// component ui
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";

function NavbarHomePage({ showBtn = false }) {
  const t = useTranslations();
  return (
    <Navbar>
      {showBtn && (
        <div>
          <Button size="sm" asChild>
            <Link href={`/sign-in`}>{t("login")}</Link>
          </Button>
          <Button className="mx-2" variant="secondary" size="sm" asChild>
            <Link href="/select-org">{t("go-to-your-boards")}</Link>
          </Button>
        </div>
      )}
    </Navbar>
  );
}

export { NavbarHomePage };
