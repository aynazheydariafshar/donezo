import { BoardCardType } from "@/types/board-card";

export function ListHeader({ data }: { data: BoardCardType }) {
  return (
    <div className="pt-2 px-2 text-sm flex justify-between items-start gap-x-2">
      <div className="w-full text-sm px-2 py-1 border-transparent">
        {data.title}
      </div>
    </div>
  );
}
