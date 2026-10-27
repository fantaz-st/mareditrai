"use server";

import { wpFetch } from "@/lib/wpFetch";
import { ALL_NEWS } from "@/lib/queries";
import { wpLangFromLocale } from "@/lib/lang";
import site from "@/settings/site";

export async function loadMoreNews(locale, after) {
  if (typeof after !== "string" || !after) return { posts: [], pageInfo: { hasNextPage: false, endCursor: null } };

  const data = await wpFetch(ALL_NEWS, {
    first: site.news.pageSize,
    after,
    order: "DESC",
    lang: wpLangFromLocale(locale),
  });

  return {
    posts: data?.posts?.nodes || [],
    pageInfo: data?.posts?.pageInfo || { hasNextPage: false, endCursor: null },
  };
}
