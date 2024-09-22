import SwitchTheme from "@/components/ui/switch-theme";
import React from "react";

export default function HomePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
      {/* Navbar */}
      <SwitchTheme />
      <main className="">{children}</main>
      {/* Footer */}
    </div>
  );
}
