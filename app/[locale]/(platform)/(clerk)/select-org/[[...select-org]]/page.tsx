import { OrganizationList } from "@clerk/nextjs";
import { useLocale } from "next-intl";

export default function CreateOrganizationPage() {
  const locale = useLocale();
  return (
    <OrganizationList
      hidePersonal
      afterSelectOrganizationUrl={`/${locale}/organization/:id`}
      afterCreateOrganizationUrl={`/${locale}/organization/:id`}
    />
  );
}
