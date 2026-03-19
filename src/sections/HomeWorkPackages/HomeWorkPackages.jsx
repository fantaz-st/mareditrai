"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button, Container, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import classes from "./HomeWorkPackages.module.css";

const copy = {
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
  const t = copy[locale] || copy.hr;

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
      offset: 60,
    });
  }, []);

  return (
    <section className={classes.wrap}>
      <Container className={classes.container}>
        <div className={classes.top}>
          <div className={classes.topLeft} data-aos="fade-up">
            <Typography variant="overline" className={classes.eyebrow}>
              {t.eyebrow}
            </Typography>

            <Typography variant="h2" className={classes.title}>
              {t.title}
            </Typography>
          </div>

          <div className={classes.topRight} data-aos="fade-up" data-aos-delay="100">
            <Typography className={classes.intro}>{t.intro}</Typography>

            <Link href={t.href} className={classes.ctaLink}>
              <Button component="span" variant="outlined" className={classes.cta}>
                {t.cta}
              </Button>
            </Link>
          </div>
        </div>

        <div className={classes.grid}>
          {t.items.map((item, index) => (
            <article key={item.key} className={classes.card} data-aos="fade-up" data-aos-delay={index * 80}>
              <div className={classes.cardTop}>
                <span className={classes.key}>{item.key}</span>
                <span className={classes.line} />
              </div>

              <Typography className={classes.cardTitle}>{item.title}</Typography>

              <Typography className={classes.cardText}>{item.text}</Typography>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
