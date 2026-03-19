"use client";

import { Container, Grid, Typography, Button, Card, CardContent, Box } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import classes from "./HomePapersSection.module.css";

const content = {
  hr: {
    eyebrow: "Objavljeni radovi",
    title: "Znanstveni rezultati projekta na jednom mjestu.",
    text: "Pregledajte objavljene znanstvene radove, istraživačke rezultate i projektne doprinose nastale u okviru projekta MareDiTrAI, dostupne putem službene baze CRORIS.",
    cta: "Pogledaj radove",
    sourceTitle: "CRORIS baza",
    sourceText: "Službeni hrvatski informacijski sustav znanosti koji omogućuje pristup znanstvenim publikacijama i rezultatima povezanima s projektom.",
    sourceLink: "Otvori vanjski izvor",
  },
  en: {
    eyebrow: "Published Papers",
    title: "Scientific outputs collected in one place.",
    text: "Explore published scientific papers, research findings, and project contributions developed within the MareDiTrAI project, available through the official CRORIS database.",
    cta: "View publications",
    sourceTitle: "CRORIS Database",
    sourceText: "Official Croatian research information system providing access to scientific publications and project-related outputs.",
    sourceLink: "Open external source",
  },
};

const papersUrl = "https://www.croris.hr/projekti/projekt/15704";

export default function HomePapersSection({ locale = "hr" }) {
  const t = content[locale] || content.en;

  return (
    <section className={classes.wrap}>
      <Container className={classes.container}>
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }} data-aos="fade-up">
            <div className={classes.left}>
              <Typography variant="overline" className={classes.eyebrow}>
                {t.eyebrow}
              </Typography>

              <Typography variant="h2" className={classes.title}>
                {t.title}
              </Typography>

              <Typography className={classes.text}>{t.text}</Typography>
            </div>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }} data-aos="fade-up" data-aos-delay="100">
            <Card variant="glass" className={classes.card} elevation={0}>
              <CardContent className={classes.cardContent}>
                <Box className={classes.iconWrap}>
                  <DescriptionOutlinedIcon className={classes.icon} />
                </Box>

                <Typography variant="h5" className={classes.cardTitle}>
                  {t.sourceTitle}
                </Typography>

                <Typography className={classes.cardText}>{t.sourceText}</Typography>

                <div className={classes.cardLinkWrap}>
                  <Button variant="text" href={papersUrl} target="_blank" rel="noopener noreferrer" endIcon={<OpenInNewIcon />} className={classes.linkButton}>
                    {t.sourceLink}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
