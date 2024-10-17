import Link from "next/link";
import { useTranslations } from "next-intl";

// component-ui
import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";

function HomePage() {
  const t = useTranslations();
  const { userId } = auth();

  return (
    <div className="text-black pb-11 dark:text-white bg-minimal-gradient dark:bg-minimal-gradient-dark min-h-screen">
      <div
        style={{ direction: "ltr" }}
        className="fixed top-0 left-0 transform rotate-[80deg]"
      >
        <div className="absolute opacity-5 w-wave h-wave ml-wave-left mt-wave-top rounded-wave animate-rotate bg-gray-800 dark:bg-white"></div>
      </div>
      <div
        style={{ direction: "ltr" }}
        className="fixed top-0 left-0 transform rotate-[80deg]"
      >
        <div className="absolute opacity-10 w-wave h-wave ml-wave-left mt-wave-top rounded-wave animate-rotate-fast bg-gray-800 dark:bg-white"></div>
      </div>
      <div className="flex flex-col px-14 py-24 justify-center items-center z-10 gap-3 relative">
        <div className="flex flex-col justify-center items-center space-y-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-center">
            {t("welcome-to-donezo")}
          </h1>
          <h2 className="text-lg md:text-2xl py-1 px-3 text-center text-wrap rounded-lg bg-secondary-400 border border-black text-black transition [box-shadow:rgb(171,_196,245)-8px_8px] hover:[box-shadow:rgb(171,_196,_245)0px_0px]">
            {t("donezo-Slogan")}
          </h2>
          {/* <p className="text-lg md:text-2xl text-center max-w-[65vw]">
            {t("donezo-content-home-page")}
          </p> */}
          <Button
            size="lg"
            className="bg-secondary-400 text-xl border border-black text-black transition [box-shadow:rgb(171,_196,245)-8px_8px] hover:[box-shadow:rgb(171,_196,_245)0px_0px] hover:bg-secondary-500"
          >
            <Link
              className="font-bold"
              href={userId ? "/select-org" : "/sign-in"}
            >
              {t("get-started")}
            </Link>
          </Button>
        </div>
        <div className="hidden lg:block">
          <Image
            src="/images/homepage.png"
            alt="image for home page"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="py-2 lg:py-32 flex flex-col justify-center items-center">
        <p className="text-lg md:text-2xl text-center max-w-[65vw]">
          {t("donezo-content-home-page")}
        </p>
        <div className="hidden lg:block">
          <Image
            src="/images/captionImage.png"
            alt="image for caption page"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
