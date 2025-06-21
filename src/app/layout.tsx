import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Children } from "../types";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nextbill",
  description: "Invoice creation and billing app",
};

export default function RootLayout({
  children,
}: Readonly<Children>) {
  return (
    <html lang="en">
      <body
        className={cn( inter.className, "antialiased")}
      >
        {children}
      </body>
    </html>
  );
}
