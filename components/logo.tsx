import { cn } from "@/lib/utils";
import { CheckCheck } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";

const logoFont = localFont({
  src: ".././public/fonts/permanent-marker/Moul-Regular.ttf",
});
const Logo = ({ showTextLogo = false }) => {
  const locale = useLocale();
  const t = useTranslations();
  return (
    <Link
      className={cn(
        "sm:flex items-center hover:opacity-75 transition hidden",
        logoFont.className
      )}
      href={`/${locale}`}
    >
      {showTextLogo && (
        <Image
          alt="donezo-logo"
          src="/images/donezoLogo.png"
          width={80}
          height={10}
        />
      )}
      <p className={"text-lg text-black dark:text-white md:block hidden"}>
        Donezo
      </p>
      <p className="mx-1"> = {t("its-done")}</p>
      <CheckCheck />
    </Link>
  );
};

export default Logo;
