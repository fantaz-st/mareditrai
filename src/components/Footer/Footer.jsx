"use client";

import site from "@/settings/site";
import classes from "./Footer.module.css";
import Link from "next/link";
import { Container, Typography, Grid, Box } from "@mui/material";
import Image from "next/image";

export default function Footer({ menuItems = [], locale }) {
  const topLevelLinks = menuItems || [];
  const externalLinks = site.footer?.links;

  return (
    <footer className={classes.wrap}>
      <Container className={classes.container}>
        <Grid container spacing={4}>
          {/* BRAND */}
          <Grid size={{ xs: 12, md: 6, lg: 5 }}>
            <Box className={classes.brand}>
              <Typography variant="h5" className={classes.brandTitle}>
                {site.name}
              </Typography>

              <Typography variant="body1" className={classes.brandText}>
                {site.footer?.summary?.text[locale]}
              </Typography>

              <div className={classes.euLogos}>
                <Image src="/images/funded-eu-hr.svg" alt="EU" width={180} height={70} className={classes.euLogo} />
                <Image src="/images/funded-eu-en.svg" alt="EU" width={180} height={70} className={classes.euLogo} />
              </div>
            </Box>
          </Grid>

          {/* PROJECT LINKS */}
          <Grid size={{ xs: 6, md: 3, lg: 3 }}>
            <Box className={classes.col}>
              <Typography variant="overline" className={classes.colTitle}>
                {locale === "hr" ? "Projekt" : "Project"}
              </Typography>

              <div className={classes.colLinks}>
                {topLevelLinks.map((item) => (
                  <Link key={item.databaseId} href={item.uri} className={classes.link}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </Box>
          </Grid>

          {/* EXTERNAL LINKS */}
          <Grid size={{ xs: 6, md: 3, lg: 2 }}>
            <Box className={classes.col}>
              <Typography variant="overline" className={classes.colTitle}>
                {locale === "hr" ? "Poveznice" : "Links"}
              </Typography>

              <div className={classes.colLinks}>
                {externalLinks.map((l, i) => (
                  <a key={i} href={l.href} target="_blank" rel="noopener noreferrer" className={classes.link}>
                    {l.label}
                  </a>
                ))}
              </div>
            </Box>
          </Grid>
        </Grid>

        {/* BOTTOM */}
        <div className={classes.bottom}>
          <Typography variant="body2" className={classes.copy}>
            © {new Date().getFullYear()} {locale === "hr" ? site.footer?.copyright?.owner?.hr : site.footer?.copyright?.owner?.en}.{" "}
            {locale === "hr" ? "Sva prava pridržana." : "All rights reserved."}
          </Typography>

          <div className={classes.bottomLinks}>
            <Link href={locale === "hr" ? "/hr/politika-privatnosti" : "/en/privacy-policy"} className={classes.bottomLink}>
              {locale === "hr" ? "Politika privatnosti" : "Privacy Policy"}
            </Link>

            <Link href={locale === "hr" ? "/hr/impressum" : "/en/imprint"} className={classes.bottomLink}>
              {locale === "hr" ? "Impressum" : "Imprint"}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
