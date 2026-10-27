import NewsIndex from "../(sections)/NewsIndex";

export const metadata = {
  title: "News",
  alternates: { canonical: "/en/news", languages: { en: "/en/news", hr: "/hr/novosti" } },
};

export default async function NewsPage({ params }) {
  const { locale } = await params;
  return <NewsIndex title="News" locale={locale} />;
}
