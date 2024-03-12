import type { Metadata } from "next";
import { Inter, Inclusive_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inclusive_Sans({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: {
    default: "Flow jobs",
    template: "%s || Flow jobs",
  },
  description: "Find your dream developer jobs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "min-w-[350px]")}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
