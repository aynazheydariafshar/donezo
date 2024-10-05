import { cn } from "@/utils/utils";
import { CheckCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";

const logoFont = localFont({
  src: ".././public/fonts/permanent-marker/Moul-Regular.ttf",
});
const Logo = () => {
  const t = useTranslations();
  return (
    <Link
      style={{ direction: "ltr" }}
      className={cn(
        "sm:flex items-center hover:opacity-75 transition hidden",
        logoFont.className
      )}
      href={`/`}
    >
      <Image
        alt="donezo-logo"
        src="/images/donezoLogo.png"
        width={80}
        className="rtl"
        height={10}
      />
      <div className="md:flex hidden items-center justify-center space-x-1 ltr">
        <p className={"text-lg text-black dark:text-white"}>Donezo</p>
        <p className="mx-1"> = {t("its-done")}</p>
        <CheckCheck />
      </div>
    </Link>
  );
};

export { Logo };
