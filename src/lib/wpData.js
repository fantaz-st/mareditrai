import { cache } from "react";
import { wpFetch } from "./wpFetch";
import { PAGE_BY_PATH, POST_BY_SLUG } from "./queries";
import { wpLangFromLocale } from "./lang";

// cache() dedupes the POST between generateMetadata and the page within one render
export const getPageByPath = cache(async (path) => {
  const data = await wpFetch(PAGE_BY_PATH, { path });
  return data?.page || null;
});

export const getPostBySlug = cache(async (slug, locale) => {
  const data = await wpFetch(POST_BY_SLUG, { slug, lang: wpLangFromLocale(locale) });
  return data?.posts?.nodes?.[0] || null;
});

export function parseBlocks(blocks) {
  if (Array.isArray(blocks)) return blocks;
  if (typeof blocks === "string") return JSON.parse(blocks);
  return [];
}

export function stripHtml(html = "") {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/&hellip;|\[&hellip;\]/g, "…")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#8217;/g, "’")
    .replace(/\s+/g, " ")
    .trim();
}
