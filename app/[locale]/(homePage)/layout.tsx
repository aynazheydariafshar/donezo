import NavbarHomePage from "./_components/navbar";

const HomePageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <NavbarHomePage />
      <main className="">{children}</main>
      {/* Footer */}
    </div>
  );
};

export default HomePageLayout;
