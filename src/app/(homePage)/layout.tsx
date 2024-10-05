import { FooterHomePage } from "./_components/footer";
import { NavbarHomePage } from "./_components/navbar";

function HomePageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full">
      <NavbarHomePage showBtn />
      <main className="">{children}</main>
      <FooterHomePage />
    </div>
  );
}

export default HomePageLayout;
