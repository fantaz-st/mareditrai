import site from "@/settings/site";

// Pages that set openGraph replace the layout's object entirely, so they spread this in
export function baseOpenGraph(locale) {
  return {
    siteName: site.name,
    locale: locale === "hr" ? "hr_HR" : "en_US",
    type: "website",
    description: site.descriptions[locale] || site.description,
  };
}
