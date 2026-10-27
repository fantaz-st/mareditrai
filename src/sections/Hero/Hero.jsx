import { Box, Container, Stack, Typography } from "@mui/material";
import NextLinkButton from "@/components/NextButtonLink/NextButtonLink";
import classes from "./Hero.module.css";

const content = {
  en: {
    title: "MareDiTrAI",
    subtitle: "AI driving the digital transformation of the maritime sector",
    text: "Artificial intelligence in the service of safer, smarter and more sustainable maritime systems.",
    cta1: {
      href: "/en/project/about",
      label: "Learn More",
    },
  },
  hr: {
    title: "MareDiTrAI",
    subtitle: "Umjetna inteligencija u službi digitalne transformacije pomorskog sektora",
    text: "Umjetna inteligencija za sigurnije, pametnije i održivije pomorske sustave.",
    cta1: {
      href: "/hr/projekt/o-projektu",
      label: "Saznaj više",
    },
  },
};

export default function Hero({ locale = "en" }) {
  const t = content[locale] || content.en;

  return (
    <Box className={classes.hero}>

      <Container maxWidth="xl" className={classes.container}>
        <Box className={classes.center}>
          <Stack spacing={3} alignItems="center" textAlign="center">
            <Typography variant="h1" className={classes.title}>
              {t.title}
            </Typography>

            <Typography variant="h4" className={classes.subtitle}>
              {t.subtitle}
            </Typography>

            <Typography variant="body1" className={classes.text} data-aos="fade-up" data-aos-delay="200">
              {t.text}
            </Typography>

            <Box className={classes.buttons} data-aos="fade-up" data-aos-delay="300">
              <NextLinkButton href={t.cta1.href} variant="cta">
                {t.cta1.label}
              </NextLinkButton>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
