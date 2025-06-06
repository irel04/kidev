import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import DarkModeToggle from "@/components/DarkModeToggle";
import ThemeProvider from "@/components/ThemeProvider";
import Stepper from "@/components/Stepper";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "kidev",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <div className="flex flex-col relative max-w-[1222px] mx-auto h-dvh overflow-y-auto z-10">

            {/* Wrapper for contents */}
            {children}

            <Stepper />
            <DarkModeToggle />

            <Navigation />

          </div>
          <BackgroundBeams className="bg-backround"/>

          <Toaster position="top-right"/>
        </ThemeProvider>

      </body>
    </html>
  );
}
