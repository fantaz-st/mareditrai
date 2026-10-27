import { notFound } from "next/navigation";
import { Box, Container, Typography } from "@mui/material";
import BlockRenderer from "@/components/BlockRenderer/BlockRenderer";
import NextLinkButton from "@/components/NextButtonLink/NextButtonLink";
import { PageTranslations } from "@/components/LanguageSwitch/TranslationsContext";
import Image from "next/image";
import classes from "./NewsPost.module.css";
import { fmtDate } from "@/functions/date";
import { postHrefs } from "@/functions/localizeUri";
import { getPostBySlug, parseBlocks, stripHtml } from "@/lib/wpData";
import { baseOpenGraph } from "@/lib/metadata";

export async function generateNewsPostMetadata({ params }) {
  const { slug, locale } = await params;
  const p = await getPostBySlug(slug, locale);
  if (!p) return {};

  const hrefs = postHrefs(p, locale);
  const description = stripHtml(p.excerpt).slice(0, 300) || undefined;
  const image = p.featuredImage?.node?.sourceUrl;

  return {
    title: p.title,
    description,
    alternates: { canonical: hrefs[locale], languages: hrefs },
    openGraph: {
      ...baseOpenGraph(locale),
      type: "article",
      title: p.title,
      description,
      url: hrefs[locale],
      publishedTime: p.date,
      modifiedTime: p.modified,
      ...(image ? { images: [image] } : {}),
    },
  };
}

export default async function NewsPost({ params, backHref, backLabel }) {
  const { slug, locale } = await params;

  const p = await getPostBySlug(slug, locale);
  if (!p) return notFound();

  const blocks = parseBlocks(p.blocks);

  return (
    <Container className={classes.container}>
      <PageTranslations hrefs={postHrefs(p, locale)} />
      <div className={classes.top}>
        <NextLinkButton href={backHref} variant="cta" className={classes.backBtn}>
          ← {backLabel}
        </NextLinkButton>
      </div>

      <Typography variant="h2" component="h1" className={classes.title} data-aos="fade-up">
        {p.title}
      </Typography>

      {p.date ? (
        <div className={classes.date} data-aos="fade-up" data-aos-delay="120">
          {fmtDate(p.date, locale)}
        </div>
      ) : null}

      {p.featuredImage?.node?.sourceUrl ? (
        <Box className={classes.hero} data-aos="fade-up" data-aos-delay="220">
          <Image
            src={p.featuredImage.node.sourceUrl}
            alt={p.featuredImage.node.altText || p.title}
            fill
            sizes="(min-width: 1200px) 1100px, 92vw"
            className={classes.heroImg}
            priority
          />
        </Box>
      ) : null}

      <div className={classes.content} data-aos="fade-up" data-aos-delay={p.featuredImage?.node?.sourceUrl ? "320" : "180"}>
        {blocks.map((block, i) => (
          <BlockRenderer block={block} key={block?.clientId || i} />
        ))}
      </div>
    </Container>
  );
}
