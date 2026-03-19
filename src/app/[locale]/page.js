import Hero from "@/sections/Hero/Hero";
import HomeAbout from "@/sections/HomeAbout/HomeAbout";
import HomeNews from "@/sections/HomeNews/HomeNews";
import { ALL_NEWS } from "@/lib/queries";
import { wpFetch } from "@/lib/wpFetch";
import { wpLangFromLocale } from "@/lib/lang";
import HomeWorkPackages from "@/sections/HomeWorkPackages/HomeWorkPackages";

export default async function Page({ params }) {
  const { locale } = await params;

  const data = await wpFetch(ALL_NEWS, {
    lang: wpLangFromLocale(locale),
    first: 6,
    order: "DESC",
  });

  return (
    <div component="main">
      <Hero locale={locale} />
      <HomeAbout locale={locale} />

      <HomeWorkPackages locale={locale} />
      {data?.posts?.nodes?.length ? <HomeNews data={data} locale={locale} /> : null}
    </div>
  );
}
