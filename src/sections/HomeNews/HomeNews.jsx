"use client";

import classes from "./HomeNews.module.css";
import { Box, Container, Stack, Typography, Button, Grid } from "@mui/material";
import Link from "next/link";
import PostCard from "@/components/PostCard/PostCard";

const content = {
  hr: {
    eyebrow: "Novosti",
    title: "Najnovije vijesti i objave",
    intro: "Pratite novosti projekta, istraživačke aktivnosti, objavljene rezultate i najave važnih događanja.",
    cta: "Sve novosti",
    href: "/hr/novosti",
  },
  en: {
    eyebrow: "News",
    title: "Latest news and updates",
    intro: "Follow project news, research activities, published results and announcements of important events.",
    cta: "All news",
    href: "/en/news",
  },
};

export default function HomeNews({ data, locale = "hr" }) {
  const t = content[locale] || content.en;
  const posts = data?.posts?.nodes || [];

  if (!posts.length) return null;

  return (
    <section className={classes.wrap}>
      <Container className={classes.container}>
        <Stack direction={{ xs: "column", md: "row" }} alignItems={{ xs: "flex-start", md: "flex-end" }} justifyContent="space-between" className={classes.top} data-aos="fade-up">
          <Box className={classes.heading}>
            <Typography variant="overline" className={classes.eyebrow}>
              {t.eyebrow}
            </Typography>

            <Typography variant="h2" className={classes.title}>
              {t.title}
            </Typography>

            <Typography className={classes.intro}>{t.intro}</Typography>
          </Box>

          <Link href={t.href} className={classes.ctaLink}>
            <Button variant="cta">{t.cta}</Button>
          </Link>
        </Stack>

        <Grid container spacing={2}>
          {posts.slice(0, 6).map((p, i) => (
            <Grid key={p.id || p.slug} size={{ xs: 12, sm: 6, lg: 4 }} data-aos="fade-up" data-aos-delay={i * 100}>
              <div className={classes.item}>
                <PostCard slug={p.slug} title={p.title} date={p.date} excerpt={p.excerpt} locale={locale} />
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
