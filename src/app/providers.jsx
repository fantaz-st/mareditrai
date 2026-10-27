"use client";

import { useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import AOS from "aos";
import theme from "@/theme/theme";

export default function Providers({ children }) {
  useEffect(() => {
    AOS.init({ once: true, duration: 700, easing: "ease-out-cubic" });
  }, []);

  useEffect(() => {
    let fancybox;
    import("@fancyapps/ui").then(({ Fancybox }) => {
      fancybox = Fancybox;
      Fancybox.bind("[data-fancybox]");
    });
    return () => fancybox?.unbind("[data-fancybox]");
  }, []);

  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
