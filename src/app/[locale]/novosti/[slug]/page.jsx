import NewsPost, { generateNewsPostMetadata } from "../../(sections)/NewsPost/NewsPost";

export const generateMetadata = generateNewsPostMetadata;

export function generateStaticParams() {
  return [];
}

export default async function NovostPage(props) {
  const { locale } = await props.params;
  return <NewsPost params={props.params} backHref={`/${locale}/novosti`} backLabel="Novosti" />;
}
