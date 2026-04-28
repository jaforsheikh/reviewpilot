import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ReviewPilot AI - AI Reputation Management SaaS",
  description:
    "ReviewPilot AI helps businesses analyze reviews, generate AI replies, track reputation score, and manage customer feedback.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}