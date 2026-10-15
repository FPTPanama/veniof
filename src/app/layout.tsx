import type { Metadata } from "next";
import { Gelasio, Libre_Franklin } from "next/font/google";
import "./globals.css";

const gelasio = Gelasio({
  variable: "--font-gelasio",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const libre = Libre_Franklin({
  variable: "--font-libre",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://veniof.com"),
  title: {
    default: "VIOF | Venezuela Infrastructure Opportunity Fund",
    template: "%s · VIOF",
  },
  description:
    "VIOF is a US-managed investment fund. We partner with proven operators and Venezuelan institutions to rehabilitate essential industrial and infrastructure assets.",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "VIOF",
    images: [{ url: "/img/share.png", width: 1200, height: 630 }],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html className={`${gelasio.variable} ${libre.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
