import React from "react";
import NavbarDashboard from "./_components/navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen text-black dark:text-white bg-minimal-gradient dark:bg-minimal-gradient-dark overflow-hidden">
      <NavbarDashboard />
      <main className="overflow-auto scroll-smooth h-full">{children}</main>
    </div>
  );
}
