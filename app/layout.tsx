import type { Metadata } from "next";
import Script from "next/script";
import { IBM_Plex_Mono, Inter, Tajawal } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./components/providers";
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  weight: ["400", "500", "700"],
  subsets: ["arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mhd Moutaz Takahji — Backend & Full-Stack Engineer",
  description:
    "Final-year Computer Science student building production-ready backend systems and cross-platform apps — from normalized databases and payment flows to role-based access control.",
  keywords: [
    "Mhd Moutaz Takahji",
    "Backend Engineer",
    "Full-Stack Engineer",
    "Laravel",
    "Flutter",
    "MySQL",
    "Computer Science",
  ],
  openGraph: {
    title: "Mhd Moutaz Takahji — Backend & Full-Stack Engineer",
    description:
      "Final-year Computer Science student building production-ready backend systems and cross-platform apps.",
    type: "website",
    locale: "en_US",
  },
};

const languageBootstrap = `(function () {
  var saved = localStorage.getItem('lang');
  var lang = saved || (navigator.language && navigator.language.indexOf('ar') === 0 ? 'ar' : 'en');
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      dir="ltr"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${inter.variable} ${plexMono.variable} ${tajawal.variable} antialiased`}
    >
      <body>
        <Script id="language-bootstrap" strategy="beforeInteractive">
          {languageBootstrap}
        </Script>
        <LanguageProvider>{children}</LanguageProvider>
        <GoogleAnalytics gaId="G-XC6BL1T1LP" />
      </body>
    </html>
  );
}
