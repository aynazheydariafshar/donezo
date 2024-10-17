import { MobileSidebar } from "@/src/app/(platform)/(dasgboard)/_components/mobile-sidebar";
import { Logo } from "./logo";
import { SwitchLanguage } from "./switch-language";
import { SwitchTheme } from "./switch-theme";
import { cn } from "@/utils/utils";

function Navbar({
  children,
  sideBarIcon = false,
}: {
  children: React.ReactNode;
  sideBarIcon?: boolean;
}) {
  return (
    <nav className="fixed top-0 w-full flex items-center justify-between px-11 h-16 shadow-sm bg-white dark:bg-black dark:bg-opacity-50 bg-opacity-30 backdrop-blur-xl z-40">
      <div className="flex items-center">
        {sideBarIcon && <MobileSidebar />}
        <div>
          <Logo />
        </div>
      </div>
      <div className="items-center flex gap-6 space-x-2">
        {children}
        <div
          className={cn(
            "items-center gap-2 space-x-2",
            sideBarIcon ? "xl:flex hidden" : "flex"
          )}
        >
          <SwitchTheme />
          <SwitchLanguage />
        </div>
      </div>
    </nav>
  );
}

export { Navbar };
