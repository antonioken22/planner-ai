import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { ClerkProvider } from "@clerk/nextjs";

import { ToasterProvider } from "@/components/toaster-provider";
import { ModalProvider } from "@/components/modal-provider";
import { CrispProvider } from "@/components/crisp-provider";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

const font = Inter({ subsets: ["latin"] });

const localization = {
  formFieldLabel__emailAddress_username: "Email address (@cit.edu) or username",
  formFieldLabel__emailAddress: "Email address (@cit.edu only)",
};

export const metadata: Metadata = {
  title: "PlannerAI",
  description: "Smart Assistant",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider localization={localization}>
      <html lang="en" suppressHydrationWarning>
        <CrispProvider />
        <body className={font.className}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ToasterProvider />
            <ModalProvider />
            {children}
            <Analytics />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
