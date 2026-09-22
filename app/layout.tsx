import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const fragmentMono = localFont({
  src: [
    {
      path: "./fonts/FragmentMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/FragmentMono-Italic.ttf",
      weight: "400",
      style: "italic",
    }
  ],
  variable: "--font-fragment-mono",
});


const description =
  "Kabir Sahu - software engineer and R&D intern at Nokia (NSP). Projects in developer tooling, observability, distributed systems, homelab infrastructure, and AI.";

export const metadata: Metadata = {
  title: {
    default: "Kabir Sahu | Software Engineer",
    template: "%s | Kabir Sahu",
  },
  description,
  authors: [{ name: "Kabir Sahu", url: "https://github.com/kabir325" }],
  keywords: [
    "Kabir Sahu",
    "software engineer",
    "developer tools",
    "observability",
    "distributed systems",
    "Python",
    "Flask",
    "Next.js",
    "portfolio",
  ],
  openGraph: {
    title: "Kabir Sahu | Software Engineer",
    description,
    type: "website",
    images: [{ url: "/prof.jpg", alt: "Kabir Sahu" }],
  },
  twitter: {
    card: "summary",
    title: "Kabir Sahu | Software Engineer",
    description,
    images: ["/prof.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fragmentMono.variable}>
        {children}
      </body>
    </html>
  );
}
