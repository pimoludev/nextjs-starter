import type { Metadata } from "next";
import { PimoluProvider } from "@pimolu/react";
import "@pimolu/web-styles/styles.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pimolu UI: Next.js Starter",
  description: "A minimal Next.js starter built with Pimolu UI.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">
        <PimoluProvider defaultTheme="system">{children}</PimoluProvider>
      </body>
    </html>
  );
}
