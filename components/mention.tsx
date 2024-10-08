// types
import { MentionPropsType } from "@/types/mention-props";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function Mention({
  children,
  side = "bottom",
  description,
  sideOffset = 0,
}: MentionPropsType) {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent
          className="text-xs max-w-[220px] break-words"
          side={side}
          sideOffset={sideOffset}
        >
          {description}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
