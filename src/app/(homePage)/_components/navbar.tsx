import { useTranslations } from "next-intl";
import Link from "next/link";

// component ui
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs/server";

function NavbarHomePage({ showBtn = false }) {
  const t = useTranslations();
  const { userId } = auth();

  return (
    <Navbar>
      {showBtn && (
        <div>
          {userId ? (
            <Button className="mx-2" size="sm" asChild>
              <Link href="/select-org">{t("go-to-your-boards")}</Link>
            </Button>
          ) : (
            <Button className="mx-2" size="sm" asChild>
              <Link href={`/sign-in`}>{t("login")}</Link>
            </Button>
          )}
        </div>
      )}
    </Navbar>
  );
}

export { NavbarHomePage };
