import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rebel Rover",
  description: "Rebel Rover the travel website design, you can book tour from this website and set up payment get way option as well.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
