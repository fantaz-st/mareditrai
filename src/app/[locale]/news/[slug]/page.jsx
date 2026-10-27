import NewsPost, { generateNewsPostMetadata } from "../../(sections)/NewsPost/NewsPost";

export const generateMetadata = generateNewsPostMetadata;

export function generateStaticParams() {
  return [];
}

export default async function NewsArticlePage(props) {
  const { locale } = await props.params;
  return <NewsPost params={props.params} backHref={`/${locale}/news`} backLabel="News" />;
}
