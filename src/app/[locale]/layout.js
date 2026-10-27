import "@/styles/reset.css";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import NextTopLoader from "nextjs-toploader";
import { Analytics } from "@vercel/analytics/next";
import Providers from "../providers";
import site from "@/settings/site";
import { i18n } from "@/settings/i18n";
import { wpFetchAllMenuItems } from "@/lib/wpFetchAllMenuItems";
import createDataTree from "@/functions/createDataTree";
import { localizeUri } from "@/functions/localizeUri";
import { baseOpenGraph } from "@/lib/metadata";
import { TranslationsProvider } from "@/components/LanguageSwitch/TranslationsContext";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CookieNotice from "@/components/CookieNotice/CookieNotice";
import BackToTop from "@/components/BackToTop/BackToTop";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-primary",
  display: "swap",
});

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const description = site.descriptions[locale] || site.description;

  return {
    metadataBase: new URL(site.url),
    title: { default: site.name, template: `%s | ${site.name}` },
    description,
    openGraph: baseOpenGraph(locale),
  };
}

export const revalidate = 300;

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  if (!i18n.locales.includes(locale)) notFound();

  const menuName = site.menu?.[locale] || site.menu?.hr || site.menu;

  const flat = await wpFetchAllMenuItems(menuName);
  const menuItems = createDataTree(flat.map((item) => ({ ...item, uri: localizeUri(item.uri, locale) })));

  return (
    <html lang={locale} className={inter.variable} suppressHydrationWarning>
      <body>
        <NextTopLoader color="#ffffff" height={2} showSpinner={false} />
        <div className="app-bg" />
        <Providers>
          <TranslationsProvider>
            <div className="layout">
              <Header menuItems={menuItems} locale={locale} />

              <main className="content">{children}</main>
              <CookieNotice locale={locale} />
              <Footer menuItems={menuItems} locale={locale} />
            </div>
          </TranslationsProvider>
          <BackToTop />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
