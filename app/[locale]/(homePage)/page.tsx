import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations();
  return (
    <div className="h-screen bg-minimal-gradient">
      <div className="fixed top-0 left-0 transform rotate-[80deg]">
        <div className="absolute opacity-5 w-wave h-wave ml-wave-left mt-wave-top rounded-wave animate-rotate bg-white"></div>
      </div>
      <div className="fixed top-0 left-0 transform rotate-[80deg]">
        <div className="absolute opacity-10 w-wave h-wave ml-wave-left mt-wave-top rounded-wave animate-rotate-fast bg-white"></div>
      </div>
      <div className="flex justify-center items-center pt-40 px-11">
        <div className="flex flex-col justify-center items-center space-y-4">
          <h1 className="text-6xl text-white">{t("welcome-to-donezo")}</h1>
          <h2 className="text-2xl p-2 bg-white bg-opacity-40 rounded-lg">
            {t("donezo-Slogan")}
          </h2>
          <p className="text-white text-xl text-center max-w-[65vw]">
            {t("donezo-content-home-page")}
          </p>
          <button>test</button>
        </div>
      </div>
    </div>
  );
}
