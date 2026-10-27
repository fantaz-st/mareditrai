"use client";

import { useState, useTransition } from "react";
import { Box, Button, Grid } from "@mui/material";
import PostCard from "@/components/PostCard/PostCard";
import { loadMoreNews } from "../../actions";

export default function NewsGrid({ initialPosts = [], initialPageInfo, locale }) {
  const [posts, setPosts] = useState(initialPosts);
  const [pageInfo, setPageInfo] = useState(initialPageInfo || { hasNextPage: false, endCursor: null });
  const [error, setError] = useState(false);
  const [pending, startTransition] = useTransition();

  const loadMore = () => {
    setError(false);
    startTransition(async () => {
      try {
        const next = await loadMoreNews(locale, pageInfo.endCursor);
        setPosts((prev) => {
          const seen = new Set(prev.map((p) => p.id));
          return [...prev, ...next.posts.filter((p) => !seen.has(p.id))];
        });
        setPageInfo(next.pageInfo);
      } catch {
        setError(true);
      }
    });
  };

  return (
    <>
      <Grid container spacing={2.5}>
        {posts.map((p) => (
          <Grid key={p.id || p.slug} size={{ xs: 12, md: 4 }}>
            <PostCard slug={p.slug} title={p.title} date={p.date} locale={locale} />
          </Grid>
        ))}
      </Grid>

      {pageInfo.hasNextPage ? (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1, mt: { xs: 4, md: 6 } }}>
          <Button variant="cta" onClick={loadMore} disabled={pending}>
            {pending ? (locale === "hr" ? "Učitavanje…" : "Loading…") : locale === "hr" ? "Učitaj još" : "Load more"}
          </Button>
          {error ? (
            <Box component="span" role="alert" sx={{ color: "error.main", fontSize: "0.9rem" }}>
              {locale === "hr" ? "Učitavanje nije uspjelo. Pokušajte ponovno." : "Could not load more news. Please try again."}
            </Box>
          ) : null}
        </Box>
      ) : null}
    </>
  );
}
