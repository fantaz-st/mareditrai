import { i18n } from "@/settings/i18n";
import { routes } from "@/settings/routes";

// WP (Polylang) returns "/hr/projekt/" for hr but "/project/" for en; normalize both to "/<locale>/path"
export function localizeUri(uri, locale) {
  if (!uri || !uri.startsWith("/")) return uri;
  const hasLocale = i18n.locales.some((l) => uri === `/${l}/` || uri.startsWith(`/${l}/`));
  const path = hasLocale ? uri : `/${locale}${uri}`;
  return path.length > 1 ? path.replace(/\/+$/, "") : path;
}

const langOf = (t) => t?.language?.slug?.toLowerCase();

// { hr: "/hr/projekt", en: "/en/project" }
export function pageHrefs(page, locale) {
  const hrefs = { [locale]: localizeUri(page.uri, locale) };
  for (const t of page.translations || []) {
    const l = langOf(t);
    if (i18n.locales.includes(l) && t.uri) hrefs[l] = localizeUri(t.uri, l);
  }
  return hrefs;
}

// { hr: "/hr/novosti/slug-hr", en: "/en/news/slug-en" }
export function postHrefs(post, locale) {
  const hrefs = { [locale]: `/${locale}/${routes[locale].news}/${post.slug}` };
  for (const t of post.translations || []) {
    const l = langOf(t);
    if (i18n.locales.includes(l) && t.slug) hrefs[l] = `/${l}/${routes[l].news}/${t.slug}`;
  }
  return hrefs;
}
