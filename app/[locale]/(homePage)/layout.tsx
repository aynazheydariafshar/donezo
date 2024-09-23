import React from "react";
import NavbarHomePage from "./_compponents/navbar";

export default function HomePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
      <NavbarHomePage />
      <main className="">{children}</main>
      {/* Footer */}
    </div>
  );
}
