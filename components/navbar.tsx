import { MobileSidebar } from "@/app/(platform)/(dasgboard)/_components/mobile-sidebar";
import { Logo } from "./logo";
import { SwitchLanguage } from "./switch-language";
import { SwitchTheme } from "./switch-theme";

function Navbar({
  children,
  sideBarIcon = false,
}: {
  children: React.ReactNode;
  sideBarIcon?: boolean;
}) {
  return (
    <nav className="fixed top-0 w-full flex items-center justify-between px-11 h-16 shadow-sm bg-black black:bg-white bg-opacity-35 z-40">
      <div className="flex items-center">
        {sideBarIcon && <MobileSidebar />}
        <div>
          <Logo />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        {children}
        <SwitchTheme />
        <SwitchLanguage />
      </div>
    </nav>
  );
}

export { Navbar };
