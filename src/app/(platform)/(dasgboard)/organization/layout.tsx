import { SidebarDashboard } from "../_components/sidebar";

export default function OrganizationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pt-20 flex md:pt-24 justify-between px-20 w-full mx-auto">
      <div className="w-64 shrink-0 hidden xl:block">
        <SidebarDashboard />
      </div>
      <div className="pb-11 w-full ">{children}</div>
    </div>
  );
}
