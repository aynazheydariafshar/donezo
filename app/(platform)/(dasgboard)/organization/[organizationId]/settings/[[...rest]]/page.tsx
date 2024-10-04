import { OrganizationProfile } from "@clerk/nextjs";

export default function SettingsPage() {
  return (
    <div className="flex w-full justify-center items-center">
      <OrganizationProfile />
    </div>
  );
}
