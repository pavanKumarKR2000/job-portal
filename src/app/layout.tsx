import type { Metadata } from "next";
import { Inter, Inclusive_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";

const inter = Inclusive_Sans({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
      </body>
    </html>
  );
}
