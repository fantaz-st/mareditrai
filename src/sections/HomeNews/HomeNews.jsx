"use client";

import classes from "./HomeNews.module.css";
import { Box, Container, Stack, Typography, Button } from "@mui/material";
import Link from "next/link";
import PostCard from "@/components/PostCard/PostCard";

export default function HomeNews({ data, locale = "hr" }) {
  const newsBase = locale === "hr" ? "/hr/novosti" : "/en/news";
  const posts = data?.posts?.nodes || [];

  if (!posts.length) return null;

  return (
    <section className={classes.wrap}>
      <Container className={classes.container}>
        <Stack direction={{ xs: "column", md: "row" }} alignItems={{ xs: "flex-start", md: "flex-end" }} justifyContent="space-between" className={classes.top} data-aos="fade-up">
          <Box className={classes.heading}>
            <Typography variant="overline" className={classes.eyebrow}>
              {locale === "hr" ? "Novosti" : "News"}
            </Typography>

            <Typography variant="h2" className={classes.title}>
              {locale === "hr" ? "Najnovije vijesti i objave" : "Latest news and updates"}
            </Typography>

            <Typography className={classes.intro}>
              {locale === "hr"
                ? "Pratite novosti projekta, istraživačke aktivnosti, objavljene rezultate i najave važnih događanja."
                : "Follow project news, research activities, published results and announcements of important events."}
            </Typography>
          </Box>

          <Link href={newsBase} className={classes.ctaLink}>
            <Button component="span" variant="outlined" className={classes.ctaBtn}>
              {locale === "hr" ? "Sve novosti" : "All news"}
            </Button>
          </Link>
        </Stack>

        <div className={classes.grid}>
          {posts.slice(0, 4).map((p, index) => (
            <div key={p.id || p.slug} className={classes.item} data-aos="fade-up" data-aos-delay={80 + index * 70}>
              <PostCard slug={p.slug} title={p.title} date={p.date} excerpt={p.excerpt} locale={locale} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
