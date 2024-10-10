import { Button } from "@/components/ui/button";
import { BoardNavbarPropsType } from "@/types/board-navbar-props";

export default function BoardNavbar({ id, data }: BoardNavbarPropsType) {
  return (
    <div className="w-full h-14 z-40 bg-white dark:bg-black bg-opacity-35 dark:bg-opacity-35 fixed top-16 flex items-center px-11 gap-x-4 text-black dark:text-white">
      <Button className="text-lg" variant="ghost">
        {data.title}
      </Button>
    </div>
  );
}
