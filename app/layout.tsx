import type { Metadata } from "next";
import "./globals.css";
import Header from "./component/Header";
import Footer from "./component/Footer";

export const metadata: Metadata = {
  title: "Rebel Rover",
  description: `Rebel Rover the travel website design,
  you can book tour from this website and set up payment get way option as well.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col w-full h-full min-h-screen">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
