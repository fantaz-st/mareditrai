"use client";

import { Grid } from "@mui/material";
import PostCard from "@/components/PostCard/PostCard";

export default function NewsGrid({ posts = [], locale }) {
  return (
    <Grid container spacing={2.5}>
      {posts.map((p) => (
        <Grid key={p.id || p.slug} size={{ xs: 12, md: 4 }}>
          <PostCard slug={p.slug} title={p.title} date={p.date} locale={locale} />
        </Grid>
      ))}
    </Grid>
  );
}
