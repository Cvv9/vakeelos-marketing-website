import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { PaperTexture } from "@/components/effects/paper-texture";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const SITE_URL = "https://vakeelos.com";
const SITE_TITLE = "VakeelOS — Practice management for the Indian bar";
const SITE_DESCRIPTION =
  "Case management, causelist sync, and AI drafting built for India's 1.8 million advocates. Hosted in India. Bar Council verified.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s · VakeelOS",
  },
  description: SITE_DESCRIPTION,
  applicationName: "VakeelOS",
  keywords: [
    "Indian legal software",
    "advocate practice management",
    "case management India",
    "causelist sync",
    "VakeelBrain",
    "AI legal drafting",
    "eCourts integration",
    "bar council software",
    "Razorpay UPI invoicing",
    "Indian data residency",
  ],
  authors: [{ name: "VakeelOS" }],
  creator: "VakeelOS",
  publisher: "VakeelOS",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    siteName: "VakeelOS",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    creator: "@vakeelos",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "Legal Technology",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <PaperTexture />
        <Nav />
        <main className="relative z-[2] flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
