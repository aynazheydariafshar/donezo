import { CreateCardType } from "@/actions/card";

export default function CardItem({
  card,
  index,
}: {
  card: CreateCardType;
  index: number;
}) {
  return (
    <div
      role="button"
      className="truncate my-1 bg-white bg-opacity-75 dark:bg-black dark:bg-opacity-95 border-2 border-transparent hover:border-black dark:hover:border-white py-2 px-3 text-sm rounded-md shadow-sm"
    >
      {card.title}
    </div>
  );
}
