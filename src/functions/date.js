import dayjs from "dayjs";
import "dayjs/locale/hr";
import "dayjs/locale/en";

export const fmtDate = (iso, locale = "hr") => {
  return dayjs(iso)
    .locale(locale === "hr" ? "hr" : "en")
    .format(locale === "hr" ? "D. MMMM YYYY." : "MMMM D, YYYY");
};

export const ymKey = (iso) => dayjs(iso).format("YYYY-MM");

export const ymLabel = (key, locale = "hr") => {
  return dayjs(key + "-01")
    .locale(locale === "hr" ? "hr" : "en")
    .format(locale === "hr" ? "MMMM YYYY" : "MMMM YYYY");
};
