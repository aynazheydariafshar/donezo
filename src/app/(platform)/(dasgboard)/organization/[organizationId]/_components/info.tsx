import { Skeleton } from "@/components/ui/skeleton";
import { useOrganization } from "@clerk/nextjs";
import { WalletMinimal } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Info() {
  const t = useTranslations();
  const { organization, isLoaded } = useOrganization();
  if (!isLoaded) return <Info.Skeleton />;
  return (
    <div className="flex items-center gap-x-4 p-11">
      <div className="w-[60px] h-[60px] relative">
        <Image
          fill
          src={organization?.imageUrl!}
          alt="organization"
          className="rounded-md object-cover"
        />
      </div>
      <div className="space-y-1">
        <p className="font-semibold text-xl">{organization?.name}</p>
        <div className="flex items-center gap-x-2">
          <WalletMinimal className="h-4 w-4" />
          {t("free")}
        </div>
      </div>
    </div>
  );
}

Info.Skeleton = function SkeletonInfo() {
  return (
    <div className="flex items-center gap-x-4 mb-4">
      <div className="w-[60px] h-[60px] relative">
        <Skeleton className="w-full h-full absolute" />
      </div>
      <div className="space-y-1">
        <Skeleton className="h-10 w-[200px]" />
        <div className="flex items-center">
          <Skeleton className="h-6 w-8 mx-1" />
          <Skeleton className="h-6 w-[100px]" />
        </div>
      </div>
    </div>
  );
};
