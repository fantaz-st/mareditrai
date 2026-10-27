import { NextResponse } from "next/server";
import { i18n } from "./settings/i18n";
import { routes } from "./settings/routes";

const PUBLIC_FILE = /\.(.*)$/;

// e.g. "/hr/news/x": "news" belongs to another locale, so return this locale's segment ("novosti")
function localizedSegment(locale, segment) {
  if (!segment) return null;
  const own = routes[locale] || {};
  if (Object.values(own).includes(segment)) return null;

  for (const other of i18n.locales) {
    for (const [key, value] of Object.entries(routes[other] || {})) {
      if (value === segment && own[key]) return own[key];
    }
  }
  return null;
}

export function proxy(req) {
  const { pathname, search } = req.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/robots.txt") ||
    pathname.startsWith("/sitemap") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0];

  if (i18n.locales.includes(first)) {
    const localized = localizedSegment(first, segments[1]);
    if (!localized) return NextResponse.next();

    const url = req.nextUrl.clone();
    url.pathname = "/" + [first, localized, ...segments.slice(2)].join("/");
    return NextResponse.redirect(url, 308);
  }

  const cookieLocale = req.cookies.get(i18n.cookieName)?.value;
  const locale = i18n.locales.includes(cookieLocale) ? cookieLocale : i18n.defaultLocale;

  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  url.search = search;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
