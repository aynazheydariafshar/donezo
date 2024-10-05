import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

function FooterHomePage() {
  const t = useTranslations();
  return (
    <div className="fixed bottom-0 px-11 py-1 w-full z-50 bg-black black:bg-white bg-opacity-35">
      <div className="flex justify-between items-center">
        <div>
          <Logo />
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="link" size="sm">
            {t("privacy-policy")}
          </Button>
          <Button variant="link" size="sm">
            {t("terms-of-services")}
          </Button>
        </div>
      </div>
    </div>
  );
}

export { FooterHomePage };
