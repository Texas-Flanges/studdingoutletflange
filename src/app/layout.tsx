import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Studding Outlet Flange",
  description: "Industrial Pipe Flanges",
  metadataBase: new URL("https://studdingoutletflange.com"),
  openGraph: {
    type: "website",
    siteName: "Studding Outlet Flange",
  },
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
