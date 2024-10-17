"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import NavItem from "./nav-item";
import { organizationType } from "@/types/organization";
import { Accordion } from "@/components/ui/accordion";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { cn } from "@/utils/utils";
import { getCookie } from "@/utils/get-cookies";
import { useEffect } from "react";

interface SidebarProps {
  storageKey?: string;
}

export function SidebarDashboard({
  storageKey = "t-sidebar-state",
}: SidebarProps) {
  const t = useTranslations();
  let cookieLocale = "";
  const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(
    storageKey,
    {}
  );
  const { organization: activeOrganization, isLoaded: isLoadedOrg } =
    useOrganization();
  const { userMemberships, isLoaded: isLoadedOrgList } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });
  const defaultAccordionValue: string[] = Object.keys(expanded).reduce(
    (acc: string[], key: string) => {
      if (expanded[key]) {
        acc.push(key);
      }
      return acc;
    },
    []
  );

  const onExpand = (id: string) => {
    setExpanded((item) => ({
      ...item,
      [id]: !expanded[id],
    }));
  };

  useEffect(() => {
    cookieLocale = getCookie("language") || "en";
  }, []);

  if (!isLoadedOrg || !isLoadedOrgList || userMemberships.isLoading) {
    return (
      <div
        className={cn(
          "w-60 fixed top-30",
          cookieLocale === "en" ? "left-30" : "right-30"
        )}
      >
        <div className="items-center justify-between flex mb-2">
          <Skeleton className="h-10 w-[50%]" />
          <Skeleton className="h-10 w-10" />
        </div>
        <div className="space-y-2">
          <NavItem.Skeleton />
          <NavItem.Skeleton />
          <NavItem.Skeleton />
        </div>
      </div>
    );
  }
  return (
    <div
      className={cn(
        "font-medium text-xs flex w-60 flex-col mb-1 fixed top-30",
        cookieLocale === "en" ? "left-30" : "right-30"
      )}
    >
      <div className="flex items-center justify-between my-1">
        <div>
          <p>{t("workspaces")}</p>
        </div>
        <div>
          <Button
            asChild
            size="icon"
            variant="ghost"
            className="ml-auto hover:bg-transparent hover:text-secondary-500"
            type="button"
          >
            <Link href="/select-org">
              <Plus />
            </Link>
          </Button>
        </div>
      </div>
      <Accordion
        className="w-full space-y-2"
        defaultValue={defaultAccordionValue}
        type="multiple"
      >
        {userMemberships.data.map(({ organization }) => (
          <NavItem
            onExpand={onExpand}
            organization={organization as organizationType}
            isActive={activeOrganization?.id === organization.id}
            key={organization.id}
            isExpanded={expanded[organization.id]}
          />
        ))}
      </Accordion>
    </div>
  );
}
