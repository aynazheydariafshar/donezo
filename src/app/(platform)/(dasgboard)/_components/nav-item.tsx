import Image from "next/image";
import { cn } from "@/utils/utils";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
// component-ui
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
// types
import { NavItemPropsType } from "@/types/nav-item-props";
// icons
import { Settings, SquareKanban } from "lucide-react";

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
      href: `/organization/${organization.id}`,
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
          "flex my-1 items-center p-1.5 gap-x-2 text-black dark:text-white hover:bg-white dark:hover:bg-slate-600 rounded-md transition text-start no-underline hover:no-underline",
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
            className={cn(
              "w-full my-1 flex justify-between items-center",
              pathName === item.href && "bg-white dark:bg-slate-600"
            )}
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

NavItem.Skeleton = function SkeletonNavItem() {
  return (
    <div className="items-center flex mb-2 gap-x-2">
      <div className="w-10 h-10 relative shrink-0">
        <Skeleton className="h-full w-full" />
      </div>
      <Skeleton className="h-10 w-full" />
    </div>
  );
};
