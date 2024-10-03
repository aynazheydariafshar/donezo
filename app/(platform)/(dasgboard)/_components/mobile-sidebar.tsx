"use client";

import { usePathname } from "next/navigation";
import { useMobileSidebar } from "@/hooks/use-mobile-sidebar";
import { useEffect, useState } from "react";
// component-ui
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
// icon
import { Menu } from "lucide-react";
import { SidebarDashboard } from "./sidebar";

export function MobileSidebar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const isOpen = useMobileSidebar((state) => state.isOpen);
  const onOpen = useMobileSidebar((state) => state.onOpen);
  const onClose = useMobileSidebar((state) => state.onClose);

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
        className="block md:hidden"
        size="sm"
        onClick={onOpen}
      >
        <Menu className="w-4 h-4" />
      </Button>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent className="p-2 pt-10" side="left">
          <SidebarDashboard storageKey="t-sidebar-mobile-state" />
        </SheetContent>
      </Sheet>
    </>
  );
}
