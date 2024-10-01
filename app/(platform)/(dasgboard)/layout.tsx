import React from "react";
import NavbarDashboard from "./_components/navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
      <NavbarDashboard />
      <main className="">{children}</main>
    </div>
  );
}
