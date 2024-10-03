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
import useLocalStorage from "@/hooks/useLocalStorage";

interface SidebarProps {
  storageKey?: string;
}

export default function SidebarDashboard({
  storageKey = "t-sidebar-state",
}: SidebarProps) {
  const t = useTranslations();
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

  if (!isLoadedOrg || !isLoadedOrgList || userMemberships.isLoading) {
    return (
      <>
        <Skeleton />
      </>
    );
  }
  return (
    <div className="font-medium text-xs flex flex-col mb-1">
      <div className="flex items-center my-1">
        <span>{t("workspaces")}</span>
        <Button
          asChild
          size="icon"
          variant="ghost"
          className="ml-auto"
          type="button"
        >
          <Link href="/select-org">
            <Plus />
          </Link>
        </Button>
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
