import { notFound } from "next/navigation";
import { i18n } from "@/settings/i18n";

export function wpLangFromLocale(locale) {
  if (!i18n.locales.includes(locale)) notFound();
  return locale.toUpperCase();
}
