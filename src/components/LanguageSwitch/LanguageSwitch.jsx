"use client";

import { FormControl, MenuItem, Select } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { i18n } from "@/settings/i18n";
import { setLocalePref } from "@/functions/setLocalePref";
import { translatePathname } from "@/functions/translatePathname";
import { useTranslationHrefs } from "./TranslationsContext";

export default function LanguageSwitch({ locale, size = "small", fullWidth = false }) {
  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();
  const translationHrefs = useTranslationHrefs();

  const currentValue = locale || i18n.defaultLocale;

  const handleChange = (e) => {
    const nextLocale = String(e.target.value || "");
    if (!nextLocale || nextLocale === currentValue) return;

    setLocalePref(nextLocale);

    // WP pages and posts register their translations; untranslated ones fall back to the locale home
    const href = translationHrefs ? translationHrefs[nextLocale] || `/${nextLocale}` : translatePathname(pathname, nextLocale);

    const query = sp?.toString();
    router.push(query ? `${href}?${query}` : href);
  };

  return (
    <FormControl size={size} fullWidth={fullWidth}>
      <Select
        value={currentValue}
        onChange={handleChange}
        variant="outlined"
        MenuProps={{ disableScrollLock: true }}
        sx={{ height: size === "small" ? 34 : 40, borderRadius: "999px", minWidth: 86 }}
      >
        <MenuItem value="hr">HR</MenuItem>
        <MenuItem value="en">EN</MenuItem>
      </Select>
    </FormControl>
  );
}
