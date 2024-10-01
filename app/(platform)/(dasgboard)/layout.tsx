import React from "react";
import NavbarDashboard from "./_components/navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen text-black dark:text-white bg-minimal-gradient dark:bg-minimal-gradient-dark">
      <NavbarDashboard />
      <main className="">{children}</main>
    </div>
  );
}
