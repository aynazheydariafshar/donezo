import Link from "next/link";
import { useTranslations } from "next-intl";

// component-ui
import { Button } from "@/components/ui/button";

function HomePage() {
  const t = useTranslations();

  return (
    <div className="h-screen text-black dark:text-white bg-minimal-gradient dark:bg-minimal-gradient-dark">
      <div className="fixed top-0 left-0 transform rotate-[80deg]">
        <div className="absolute opacity-5 w-wave h-wave ml-wave-left mt-wave-top rounded-wave animate-rotate bg-gray-800 dark:bg-white"></div>
      </div>
      <div className="fixed top-0 left-0 transform rotate-[80deg]">
        <div className="absolute opacity-10 w-wave h-wave ml-wave-left mt-wave-top rounded-wave animate-rotate-fast bg-gray-800 dark:bg-white"></div>
      </div>
      <div className="flex justify-center items-center pt-20 md:pt-32 px-11 z-10 relative">
        <div className="flex flex-col justify-center items-center space-y-4">
          <h1 className="text-3xl md:text-6xl text-center">
            {t("welcome-to-donezo")}
          </h1>
          <h2 className="text-lg md:text-2xl py-1 px-3 text-center rounded-lg bg-secondary-400 border border-black text-black transition [box-shadow:rgb(171,_196,245)-8px_8px] hover:[box-shadow:rgb(171,_196,_245)0px_0px]">
            {t("donezo-Slogan")}
          </h2>
          <p className="text-lg md:text-2xl text-center max-w-[65vw]">
            {t("donezo-content-home-page")}
          </p>
          <Button
            size="lg"
            className="bg-secondary-400 text-xl border border-black text-black transition [box-shadow:rgb(171,_196,245)-8px_8px] hover:[box-shadow:rgb(171,_196,_245)0px_0px] hover:bg-secondary-500"
          >
            <Link className="font-bold" href={`/sign-up`}>
              {t("get-started")}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
