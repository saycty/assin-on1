import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WorkerHub - Find Professional Workers",
  description:
    "Connect with verified professional workers for all your service needs. Browse welders, painters, and more skilled professionals with competitive rates.",
  keywords:
    "workers, services, professional, welder, painter, skilled labor, hire workers, construction workers",
  authors: [{ name: "WorkerHub Team" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://workerhub.vercel.app",
    title: "WorkerHub - Find Professional Workers",
    description:
      "Connect with verified professional workers for all your service needs.",
    siteName: "WorkerHub",
  },
  twitter: {
    card: "summary_large_image",
    title: "WorkerHub - Find Professional Workers",
    description:
      "Connect with verified professional workers for all your service needs.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-primary-600 text-white px-4 py-2 rounded-lg font-medium transition-colors hover:bg-primary-700"
        >
          Skip to main content
        </a>
        <div id="main-content">{children}</div>
      </body>
    </html>
  );
}
