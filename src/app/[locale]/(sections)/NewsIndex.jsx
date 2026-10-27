import { wpFetch } from "@/lib/wpFetch";
import { ALL_NEWS } from "@/lib/queries";
import { Box, Container, Typography } from "@mui/material";
import NewsGrid from "./components/NewsGrid/NewsGrid";
import { wpLangFromLocale } from "@/lib/lang";
import site from "@/settings/site";

export default async function NewsIndex({ title, locale }) {
  const data = await wpFetch(ALL_NEWS, {
    first: site.news.pageSize,
    order: "DESC",
    lang: wpLangFromLocale(locale),
  });

  const posts = data?.posts?.nodes || [];
  const pageInfo = data?.posts?.pageInfo || { hasNextPage: false, endCursor: null };

  return (
    <Box component="section" sx={{ pt: `calc(var(--header-h, 72px) + 48px)`, pb: { xs: 8, md: 10 } }}>
      <Container>
        <Typography variant="h2" component="h1" sx={{ mb: { xs: 2, md: 3 } }}>
          {title}
        </Typography>
        <NewsGrid initialPosts={posts} initialPageInfo={pageInfo} locale={locale} />
      </Container>
    </Box>
  );
}
