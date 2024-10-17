"use client";

import { usePathname } from "next/navigation";
import { useMobileSidebar } from "@/hooks/use-mobile-sidebar";
import { useEffect, useState } from "react";
// component-ui
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
} from "@/components/ui/sheet";
// icon
import { Menu, Plus } from "lucide-react";
import { SidebarDashboard } from "./sidebar";
import FormPopover from "@/components/form/form-popover";
import { useTranslations } from "next-intl";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { SwitchLanguage } from "@/components/switch-language";
import { SwitchTheme } from "@/components/switch-theme";

export function MobileSidebar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const isOpen = useMobileSidebar((state) => state.isOpen);
  const onOpen = useMobileSidebar((state) => state.onOpen);
  const onClose = useMobileSidebar((state) => state.onClose);
  const t = useTranslations();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  if (!mounted) return null;
  return (
    <>
      <Button
        variant="ghost"
        className="block text-black dark:text-white xl:hidden"
        size="sm"
        onClick={onOpen}
      >
        <Menu className="w-4 h-4" />
      </Button>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent className="overflow-auto w-72" side="left">
          <SheetHeader>
            <SidebarDashboard storageKey="t-sidebar-mobile-state" />
          </SheetHeader>
          <SheetFooter>
            <div
              style={{ direction: "ltr" }}
              className="flex items-baseline absolute bottom-5 w-60 mt-5 flex-col gap-1"
            >
              <div>
                <UserButton />
              </div>
              <div>
                <SwitchTheme />
              </div>
              <div>
                <SwitchLanguage />
              </div>
              <div>
                <OrganizationSwitcher
                  hidePersonal
                  afterLeaveOrganizationUrl="/select-org"
                  afterSelectOrganizationUrl="/organization/:id"
                  afterCreateOrganizationUrl="/organization/:id"
                />
              </div>
              {/* </div> */}
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}
