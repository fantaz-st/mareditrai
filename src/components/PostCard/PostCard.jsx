"use client";

import Link from "next/link";
import { Typography } from "@mui/material";
import dayjs from "dayjs";
import classes from "./PostCard.module.css";

export default function PostCard({ slug, title, date, excerpt, locale = "hr" }) {
  const base = locale === "hr" ? "/hr/novosti" : "/en/news";

  const cleanExcerpt = excerpt
    ?.replace(/<[^>]+>/g, "")
    ?.replace(/&hellip;/g, "...")
    ?.trim();

  return (
    <Link href={`${base}/${slug}`} className={classes.card}>
      <div className={classes.bg}>
        <div className={classes.grid} />
        <div className={classes.glow} />
      </div>

      <div className={classes.content}>
        <Typography variant="overline" className={classes.date}>
          {date ? dayjs(date).format(locale === "hr" ? "D. M. YYYY." : "D MMM YYYY") : ""}
        </Typography>

        <Typography variant="h3" className={classes.title}>
          {title}
        </Typography>

        {cleanExcerpt ? (
          <Typography variant="body1" className={classes.excerpt}>
            {cleanExcerpt}
          </Typography>
        ) : null}

        <Typography component="span" className={classes.readMore}>
          {locale === "hr" ? "Pročitaj vijest" : "Read more"}
          <span className={classes.arrow}>→</span>
        </Typography>
      </div>
    </Link>
  );
}
