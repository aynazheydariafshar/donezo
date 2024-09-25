import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";

const logoFont = localFont({
  src: ".././public/fonts/permanent-marker/Moul-Regular.ttf",
});
const Logo = () => {
  const locale = useLocale();

  return (
    <Link
      className="sm:flex items-center hover:opacity-75 transition hidden"
      href={`/${locale}`}
    >
      <Image
        alt="donezo-logo"
        src="/images/donezoLogo.png"
        width={80}
        height={10}
      />
      <p
        className={cn(
          "text-lg text-black dark:text-white md:block hidden",
          logoFont.className
        )}
      >
        Donezo
      </p>
    </Link>
  );
};

export default Logo;
