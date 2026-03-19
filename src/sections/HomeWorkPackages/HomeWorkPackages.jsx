"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button, Container, Typography, Grid, Card, CardContent, Box } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import classes from "./HomeWorkPackages.module.css";

const content = {
  hr: {
    eyebrow: "Radni paketi",
    title: "Četiri istraživačka smjera jednog projekta.",
    intro: "Projekt MareDiTrAI strukturiran je kroz četiri radna paketa koji zajedno povezuju sigurnost plovidbe, digitalne blizance, morski okoliš i kontrolu kvalitete provedbe.",
    cta: "Svi radni paketi",
    href: "/hr/radni-paketi",
    items: [
      {
        key: "WP1",
        title: "Promet i rizik",
        text: "Procjena strukture i karakteristika pomorskog prometa te analiza rizika od sudara brodova primjenom umjetne inteligencije.",
      },
      {
        key: "WP2",
        title: "Digitalni blizanci",
        text: "Razvoj modela digitalnih blizanaca sustava upravljanja termodinamičkim procesima, protoka i razine u brodskim sustavima.",
      },
      {
        key: "WP3",
        title: "Morski okoliš",
        text: "Analiza i predikcija utjecaja pomorskog prometa na morski okoliš primjenom AI metoda i satelitskih podataka.",
      },
      {
        key: "WP4",
        title: "Monitoring i kvaliteta",
        text: "Praćenje kvalitete provedbe projekta i osiguravanje konzistentnosti, realizacije i vrijednosti projektnih rezultata.",
      },
    ],
  },
  en: {
    eyebrow: "Work Packages",
    title: "Four research directions. One project.",
    intro: "MareDiTrAI is structured through four work packages connecting maritime safety, digital twins, the marine environment and quality monitoring.",
    cta: "All work packages",
    href: "/en/work-packages",
    items: [
      {
        key: "WP1",
        title: "Traffic & Risk",
        text: "Assessment of maritime traffic structure and characteristics, with AI-based analysis of ship collision risk.",
      },
      {
        key: "WP2",
        title: "Digital Twins",
        text: "Development of digital twin models for thermodynamic processes, flow systems and level control in ship systems.",
      },
      {
        key: "WP3",
        title: "Marine Environment",
        text: "Analysis and prediction of maritime traffic impacts on the marine environment using AI methods and satellite data.",
      },
      {
        key: "WP4",
        title: "Monitoring & Quality",
        text: "Monitoring project quality and ensuring consistency, delivery and value of project outcomes.",
      },
    ],
  },
};

export default function HomeWorkPackages({ locale = "hr" }) {
  const t = content[locale] || content.en;

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 60 });
  }, []);

  return (
    <section className={classes.wrap}>
      <Container className={classes.container}>
        <Grid container spacing={4} alignItems="flex-end" className={classes.top}>
          <Grid size={{ xs: 12, md: 6 }} data-aos="fade-up">
            <Typography variant="overline" className={classes.eyebrow}>
              {t.eyebrow}
            </Typography>

            <Typography variant="h2" className={classes.title}>
              {t.title}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }} data-aos="fade-up" data-aos-delay="100">
            <Typography className={classes.intro}>{t.intro}</Typography>

            <Box className={classes.ctaWrap}>
              <Button component={Link} href={t.href} variant="cta">
                {t.cta}
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          {t.items.map((item, i) => (
            <Grid key={item.key} size={{ xs: 12, sm: 6, lg: 3 }} data-aos="fade-up" data-aos-delay={i * 80}>
              <Card variant="glass" className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Box className={classes.cardTop}>
                    <span className={classes.key}>{item.key}</span>
                    <span className={classes.line} />
                  </Box>

                  <Typography className={classes.cardTitle}>{item.title}</Typography>

                  <Typography className={classes.cardText}>{item.text}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
