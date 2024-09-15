import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/dist/client/components/not-found";

export const locales = ["en", "fa"];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();
  return {
    messages: (await import(`/messages/${locale}.json`)).default,
  };
});
