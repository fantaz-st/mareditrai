"use client";

import { useEffect } from "react";
import { Button, Container, Typography } from "@mui/material";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import classes from "./HomeAbout.module.css";

const copy = {
  hr: {
    eyebrow: "O projektu",
    title: "Umjetna inteligencija za sigurnije i pametnije pomorstvo.",
    lead: "MareDiTrAI istražuje kako umjetna inteligencija, digitalni blizanci i napredna analiza podataka mogu unaprijediti sigurnost plovidbe, učinkovitost sustava i zaštitu morskog okoliša.",

    blocks: [
      {
        title: "Problem",
        text: "Projekt se razvija kao interdisciplinarni odgovor na sve veću potrebu za digitalnom transformacijom pomorskog sektora. Poseban naglasak stavlja se na kvalitetu ulaznih podataka.",
      },
      {
        title: "Istraživački fokus",
        text: "Analiza pomorskog prometa, procjena rizika sudara, razvoj digitalnih blizanaca te predikcija utjecaja prometa na okoliš primjenom AI i satelitskih podataka.",
      },
      {
        title: "Utjecaj",
        text: "Rezultati projekta doprinijet će sigurnijem, učinkovitijem i održivijem pomorstvu te jačanju znanstvene izvrsnosti i kapaciteta institucije.",
      },
    ],

    cta: "Više o projektu",
    href: "/hr/o-projektu",
  },

  en: {
    eyebrow: "About the Project",
    title: "Artificial intelligence for safer and smarter maritime systems.",
    lead: "MareDiTrAI explores how AI, digital twins and advanced analytics can improve maritime safety, efficiency and environmental sustainability.",

    blocks: [
      {
        title: "Problem",
        text: "The project addresses the growing need for digital transformation in the maritime sector, with a strong focus on data quality as the foundation of reliable AI systems.",
      },
      {
        title: "Research focus",
        text: "Traffic analysis, collision risk modelling, digital twin development and environmental impact prediction using AI and satellite data.",
      },
      {
        title: "Impact",
        text: "The results contribute to safer, more efficient and sustainable maritime systems while strengthening scientific excellence.",
      },
    ],

    cta: "More about the project",
    href: "/en/about-project",
  },
};

export default function HomeAbout({ locale = "hr" }) {
  const t = copy[locale] || copy.hr;

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className={classes.wrap}>
      <Container className={classes.container}>
        <div className={classes.grid}>
          <div className={classes.left} data-aos="fade-up">
            <Typography variant="overline" className={classes.eyebrow}>
              {t.eyebrow}
            </Typography>

            <Typography variant="h2" className={classes.title}>
              {t.title}
            </Typography>

            <Typography className={classes.lead}>{t.lead}</Typography>

            <Link href={t.href} className={classes.ctaLink}>
              <Button component="span" variant="outlined" className={classes.cta}>
                {t.cta}
              </Button>
            </Link>
          </div>

          <div className={classes.right}>
            {t.blocks.map((block, i) => (
              <div key={block.title} className={classes.card} data-aos="fade-up" data-aos-delay={i * 100}>
                <Typography className={classes.cardTitle}>{block.title}</Typography>

                <Typography className={classes.paragraph}>{block.text}</Typography>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
