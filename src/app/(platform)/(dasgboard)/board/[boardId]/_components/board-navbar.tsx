import { BoardNavbarPropsType } from "@/types/board-navbar-props";
import NavbarContent from "./navbar-content";

export default function BoardNavbar({ data }: BoardNavbarPropsType) {
  return (
    <div className="w-full h-20 z-40 bg-white dark:bg-black bg-opacity-35 dark:bg-opacity-35 fixed top-16 flex items-center px-11 gap-x-4 text-black dark:text-white">
      <NavbarContent data={data} />
    </div>
  );
}
