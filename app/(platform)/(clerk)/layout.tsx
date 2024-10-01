import Image from "next/image";
import { NavbarHomePage } from "../../(homePage)/_components/navbar";

export default function ClerkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex items-center justify-center pt-14 px-11 bg-minimal-gradient dark:bg-minimal-gradient-dark">
      <NavbarHomePage />
      <div className="flex items-center justify-center w-full space-x-3">
        <div>{children}</div>
        <div className="hidden md:block">
          <Image
            alt="donezo-logo"
            src="/images/hand-drawn-positive-working-environment-illustration.png"
            width={500}
            height={500}
          />{" "}
        </div>
      </div>
    </div>
  );
}
