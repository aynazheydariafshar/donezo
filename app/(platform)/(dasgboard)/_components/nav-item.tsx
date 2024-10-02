import Image from "next/image";
import { cn } from "@/lib/utils";
import { AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { NavItemPropsType } from "@/types/nav-item-props";

export default function NavItem({
  onExpand,
  organization,
  isActive,
  key,
  isExpanded,
}: NavItemPropsType) {
  return (
    <AccordionItem className="border-none" value={organization.id}>
      <AccordionTrigger
        className={cn(
          "flex items-center p-1.5 gap-x-2 text-neutral-700 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline",
          isActive && !isExpanded && "bg-sky-500/10 text-sky-700"
        )}
        onClick={() => onExpand(organization.id)}
      >
        <div className="flex items-center gap-x-2">
          <div className="w-7 h-7 relative">
            <Image src={organization.imageUrl} fill alt="organization list" />
          </div>
        </div>
      </AccordionTrigger>
    </AccordionItem>
  );
}
