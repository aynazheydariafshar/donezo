import OrgControl from "./_components/org-control";

export default function OrganizationIDLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <OrgControl />
      {children}
    </>
  );
}
