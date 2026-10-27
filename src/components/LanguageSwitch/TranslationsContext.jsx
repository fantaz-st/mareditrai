"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const TranslationsContext = createContext({ hrefs: null, setHrefs: () => {} });

export function TranslationsProvider({ children }) {
  const [hrefs, setHrefs] = useState(null);
  const value = useMemo(() => ({ hrefs, setHrefs }), [hrefs]);
  return <TranslationsContext.Provider value={value}>{children}</TranslationsContext.Provider>;
}

export function useTranslationHrefs() {
  return useContext(TranslationsContext).hrefs;
}

// Rendered by a page to tell the language switch where its translations live
export function PageTranslations({ hrefs }) {
  const { setHrefs } = useContext(TranslationsContext);
  const key = JSON.stringify(hrefs || {});

  useEffect(() => {
    setHrefs(JSON.parse(key));
    return () => setHrefs(null);
  }, [key, setHrefs]);

  return null;
}
