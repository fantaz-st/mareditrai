import NewsIndex from "../(sections)/NewsIndex";

export const metadata = {
  title: "Novosti",
  alternates: { canonical: "/hr/novosti", languages: { hr: "/hr/novosti", en: "/en/news" } },
};

export default async function NovostiPage({ params }) {
  const { locale } = await params;
  return <NewsIndex title="Novosti" locale={locale} />;
}
