import SwitchLanguage from "@/components/ui/switch-language";
import SwitchTheme from "@/components/ui/switch-theme";
import React from "react";

export default function NavbarHomePage() {
  return (
    <div className="fixed top-0 w-full p-4 bg-black black:bg-white bg-opacity-35 z-50">
      <div className="flex items-center">
        <SwitchTheme />
        <SwitchLanguage />
      </div>
    </div>
  );
}
