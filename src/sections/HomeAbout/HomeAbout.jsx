"use client";

import { Button, Container, Typography, Grid, Card, CardContent } from "@mui/material";
import Link from "next/link";
import classes from "./HomeAbout.module.css";

export default function HomeAbout({ locale = "hr" }) {
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

  return (
    <section className={classes.wrap}>
      <Container>
        <Grid container spacing={{ xs: 3, md: 6 }}>
          {/* LEFT */}
          <Grid size={{ xs: 12, md: 5 }}>
            <div className={classes.left}>
              <Typography variant="overline" className={classes.eyebrow}>
                {copy[locale].eyebrow}
              </Typography>

              <Typography variant="h2" className={classes.title}>
                {copy[locale].title}
              </Typography>

              <Typography className={classes.lead}>{copy[locale].lead}</Typography>

              <Link href={copy[locale].href} className={classes.ctaLink}>
                <Button variant="cta">{copy[locale].cta}</Button>
              </Link>
            </div>
          </Grid>

          {/* RIGHT */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Grid container spacing={2}>
              {copy[locale].blocks.map((block, i) => (
                <Grid key={block.title} size={{ xs: 12 }}>
                  <Card variant="glass">
                    <CardContent>
                      <Typography className={classes.cardTitle}>{block.title}</Typography>

                      <Typography className={classes.paragraph}>{block.text}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
