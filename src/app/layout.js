import "@/styles/reset.css";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Providers from "./providers";
import site from "@/settings/site";
import BackToTop from "@/components/BackToTop/BackToTop";
import NextTopLoader from "nextjs-toploader";

import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap",
});

export const metadata = {
  title: site.name,
  description: site.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body>
        <NextTopLoader color="#ffffff" height={2} showSpinner={false} />
        <div className="app-bg" />
        <Providers>
          {children}
          <BackToTop />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
