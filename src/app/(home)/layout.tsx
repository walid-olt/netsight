import type { Metadata } from "next";
import { IBM_Plex_Serif, Inter, JetBrains_Mono } from "next/font/google";
import "@/app/globals.css";
import Navigation from "@/components/Navigation";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-serif",
  weight: "400",
});
const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Netsight | Home surveillance hub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      data-scroll-behavior="smooth"
      lang="en"
      className={cn(
        "h-full bg-background",
        "antialiased",
        ibmPlexSerif.variable,
        jetBrainsMono.variable,
        "font-sans",
        inter.variable,
      )}
    >
      <body className="min-h-full bg-background ">
        <Navigation />
        <main className=" w-full">{children}</main>
      </body>
    </html>
  );
}
