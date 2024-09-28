import { Logo } from "@/components/logo";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

export default function NavbarDashboard() {
  const t = useTranslations();
  const locale = useLocale();
  return (
    <Navbar>
      <Button className="hidden md:block" size="sm">
        {t("create")}
      </Button>
      <Button className="block md:hidden" size="sm">
        <Plus />
      </Button>

      <OrganizationSwitcher
        hidePersonal
        afterLeaveOrganizationUrl={`/${locale}/select-org`}
        afterSelectOrganizationUrl={`/${locale}/organization/:id`}
        afterCreateOrganizationUrl={`/${locale}/organization/:id`}
        appearance={{
          elements: {
            rootBox: "text-2xl", // Root element styles
          },
        }}
      />
      <UserButton />
    </Navbar>
  );
}
