import Image from "next/image";
import { cn } from "@/lib/utils";
// component-ui
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// types
import { NavItemPropsType } from "@/types/nav-item-props";
// icons
import { Layout, Settings, SquareActivity, SquareKanban } from "lucide-react";

import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function NavItem({
  onExpand,
  organization,
  isActive,
  isExpanded,
}: NavItemPropsType) {
  const t = useTranslations();
  const router = useRouter();
  const pathName = usePathname();

  // options for every accordion
  const OPTION_ACCORDION = [
    {
      label: "boards",
      icon: <SquareKanban className="h-4 w-4 mr-2" />,
      href: `/organization/${organization.id}/boards`,
    },
    {
      label: "activity",
      icon: <SquareActivity className="h-4 w-4 mr-2" />,
      href: `/organization/${organization.id}/activity`,
    },
    {
      label: "settings",
      icon: <Settings className="h-4 w-4 mr-2" />,
      href: `/organization/${organization.id}/settings`,
    },
  ];

  return (
    <AccordionItem className="border-none" value={organization.id}>
      <AccordionTrigger
        className={cn(
          "flex items-center p-1.5 gap-x-2 text-black dark:text-white hover:bg-white dark:hover:bg-slate-600 rounded-md transition text-start no-underline hover:no-underline",
          isActive && !isExpanded && "bg-white dark:bg-slate-600"
        )}
        onClick={() => onExpand(organization.id)}
      >
        <div className="flex items-center gap-x-2">
          <div className="w-7 h-7 relative">
            <Image src={organization.imageUrl} fill alt="organization list" />
          </div>
          <span className="font-medium">{organization.name}</span>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        {OPTION_ACCORDION.map((item) => (
          <Button
            size="sm"
            className="w-full flex justify-between items-center"
            onClick={() => router.push(item.href)}
            key={item.href}
            variant="ghost"
          >
            {item.icon}
            {t(item.label)}
          </Button>
        ))}
      </AccordionContent>
    </AccordionItem>
  );
}
