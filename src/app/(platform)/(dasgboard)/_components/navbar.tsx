import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import { useTranslations } from "next-intl";
import FormPopover from "@/components/form/form-popover";

export default function NavbarDashboard() {
  const t = useTranslations();
  return (
    <Navbar sideBarIcon>
      <FormPopover side="bottom" sideOffset={20}>
        <Button className="hidden md:block" size="sm">
          {t("create")}
        </Button>
      </FormPopover>
      <FormPopover side="bottom" sideOffset={20}>
        <Button className="block md:hidden" size="sm">
          <Plus />
        </Button>
      </FormPopover>
      <div className="items-center gap-1 space-x-2 xl:flex hidden">
        <OrganizationSwitcher
          hidePersonal
          afterLeaveOrganizationUrl="/select-org"
          afterSelectOrganizationUrl="/organization/:id"
          afterCreateOrganizationUrl="/organization/:id"
        />
        <UserButton />
      </div>
    </Navbar>
  );
}
