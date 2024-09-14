import React from "react";

export default function HomePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
      {/* Navbar */}
      <main className="">
        {children}
      </main>
      {/* Footer */}
    </div>
  );
}
