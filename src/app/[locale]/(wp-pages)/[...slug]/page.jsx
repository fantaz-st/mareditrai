import { notFound } from "next/navigation";
import { Box, Container, Typography, Grid, Card, CardContent } from "@mui/material";
import BlockRenderer from "@/components/BlockRenderer/BlockRenderer";
import { PageTranslations } from "@/components/LanguageSwitch/TranslationsContext";
import Image from "next/image";
import Link from "next/link";
import classes from "./page.module.css";
import { fmtDate } from "@/functions/date";
import { localizeUri, pageHrefs } from "@/functions/localizeUri";
import { getPageByPath, parseBlocks } from "@/lib/wpData";
import { baseOpenGraph } from "@/lib/metadata";
import HomeIcon from "@mui/icons-material/Home";

export function generateStaticParams() {
  return [];
}

const pathFromSlug = (slug) => `/${(Array.isArray(slug) ? slug : [slug].filter(Boolean)).join("/")}/`;

export async function generateMetadata({ params }) {
  const { slug, locale } = await params;
  const page = await getPageByPath(pathFromSlug(slug));
  if (!page) return {};

  const hrefs = pageHrefs(page, locale);
  const image = page.featuredImage?.node?.sourceUrl;

  return {
    title: page.title,
    alternates: { canonical: hrefs[locale], languages: hrefs },
    openGraph: { ...baseOpenGraph(locale), title: page.title, url: hrefs[locale], ...(image ? { images: [image] } : {}) },
  };
}

export default async function WpPage(props) {
  const { slug, locale } = await props.params;

  const page = await getPageByPath(pathFromSlug(slug));
  if (!page) return notFound();

  const blocks = parseBlocks(page.blocks);

  const ancestors = page.ancestors?.nodes || [];
  const children = page.children?.nodes || [];
  const hasHero = !!page.featuredImage?.node?.sourceUrl;

  return (
    <Box component="article" className={classes.article}>
      <PageTranslations hrefs={pageHrefs(page, locale)} />
      <Container className={classes.container}>
        <header className={classes.header}>
          <nav className={classes.breadcrumbs} aria-label="Breadcrumb">
            <Link href={`/${locale}`} className={classes.crumb} aria-label={locale === "hr" ? "Početna" : "Home"}>
              <HomeIcon className={classes.homeIcon} />
            </Link>

            {ancestors
              .slice()
              .reverse()
              .map((a) => (
                <span key={a.id} className={classes.crumbRow}>
                  <span className={classes.sep}>/</span>
                  <Link href={localizeUri(a.uri, locale)} className={classes.crumb}>
                    {a.title}
                  </Link>
                </span>
              ))}

            <span className={classes.crumbRow}>
              <span className={classes.sep}>/</span>
              <span className={classes.crumbCurrent}>{page.title}</span>
            </span>
          </nav>

          <Typography variant="h2" component="h1" className={classes.title} data-aos="fade-up">
            {page.title}
          </Typography>

          {page.modified ? (
            <div className={classes.meta} data-aos="fade-up" data-aos-delay="90">
              <span className={classes.metaText}>
                {locale === "hr" ? "Ažurirano" : "Updated"} {fmtDate(page.modified, locale)}
              </span>
            </div>
          ) : null}
        </header>

        {hasHero ? (
          <div className={classes.heroMedia} data-aos="fade-up" data-aos-delay="140">
            <Image
              src={page.featuredImage.node.sourceUrl}
              alt={page.featuredImage.node.altText || page.title}
              fill
              priority
              sizes="(min-width: 1200px) 1100px, 92vw"
              className={classes.heroImage}
            />
          </div>
        ) : null}

        <div className={classes.content} data-aos="fade-up" data-aos-delay={hasHero ? "220" : "120"}>
          {blocks.map((block, i) => (
            <BlockRenderer block={block} key={block?.clientId || i} />
          ))}
        </div>

        {children.length ? (
          <section className={classes.subpages} data-aos="fade-up" data-aos-delay="160">
            <Typography variant="h6" component="h2" className={classes.subpagesTitle}>
              {locale === "hr" ? "Podstranice" : "Subpages"}
            </Typography>

            <Grid container spacing={2}>
              {children.map((c) => (
                <Grid key={c.id} size={{ xs: 12, md: 6 }}>
                  <Link href={localizeUri(c.uri, locale)} className={classes.subpageLink}>
                    <Card variant="glass" className={classes.subpageCard} elevation={0}>
                      <CardContent className={classes.subpageContent}>
                        <span className={classes.subpageLabel}>{c.title}</span>
                        <span className={classes.subpageArrow}>→</span>
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </section>
        ) : null}
      </Container>
    </Box>
  );
}
