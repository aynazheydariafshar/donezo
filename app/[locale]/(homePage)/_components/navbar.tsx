// component ui
import Logo from "@/components/logo";
import SwitchLanguage from "@/components/switch-language";
import SwitchTheme from "@/components/switch-theme";

export default function NavbarHomePage() {
  return (
    <div className="fixed top-0 w-full  flex items-center justify-between px-11 h-16 shadow-sm bg-black black:bg-white bg-opacity-35 z-50">
      <div>
        <Logo />
      </div>
      <div className="flex items-center">
        <SwitchTheme />
        <SwitchLanguage />
      </div>
    </div>
  );
}
