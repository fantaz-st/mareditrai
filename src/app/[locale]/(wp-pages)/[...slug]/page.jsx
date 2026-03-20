import { wpFetch } from "@/lib/wpFetch";
import { PAGE_BY_PATH } from "@/lib/queries";
import { notFound } from "next/navigation";
import { Box, Container, Typography, Grid, Card, CardActionArea, CardContent } from "@mui/material";
import BlockRenderer from "@/components/BlockRenderer/BlockRenderer";
import Image from "next/image";
import Link from "next/link";
import classes from "./page.module.css";
import { fmtDate } from "@/functions/date";
import HomeIcon from "@mui/icons-material/Home";

export const revalidate = 300;

export default async function WpPage(props) {
  const { slug, locale } = await props.params;
  const segments = Array.isArray(slug) ? slug : [slug].filter(Boolean);
  const path = `/${segments.join("/")}/`;

  const pageData = await wpFetch(PAGE_BY_PATH, { path });

  const page = pageData?.page;
  if (!page) return notFound();

  const blocks = Array.isArray(page.blocks) ? page.blocks : typeof page.blocks === "string" ? JSON.parse(page.blocks) : [];

  const ancestors = page.ancestors?.nodes || [];
  const children = page.children?.nodes || [];
  const hasHero = !!page.featuredImage?.node?.sourceUrl;

  return (
    <Box component="article" className={classes.article}>
      <Container className={classes.container}>
        <header className={classes.header}>
          <nav className={classes.breadcrumbs} aria-label="Breadcrumb">
            <Link href={`/${locale}`} className={classes.crumb}>
              <HomeIcon className={classes.homeIcon} />
            </Link>

            {ancestors
              .slice()
              .reverse()
              .map((a) => (
                <span key={a.id} className={classes.crumbRow}>
                  <span className={classes.sep}>/</span>
                  <Link href={a.uri} className={classes.crumb}>
                    {a.title}
                  </Link>
                </span>
              ))}

            <span className={classes.crumbRow}>
              <span className={classes.sep}>/</span>
              <span className={classes.crumbCurrent}>{page.title}</span>
            </span>
          </nav>

          <Typography variant="h2" className={classes.title} data-aos="fade-up">
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
            <Typography variant="h6" className={classes.subpagesTitle}>
              {locale === "hr" ? "Podstranice" : "Subpages"}
            </Typography>

            <Grid container spacing={2}>
              {children.map((c) => (
                <Grid key={c.id} size={{ xs: 12, md: 6 }}>
                  <Link href={c.uri} className={classes.subpageLink}>
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
