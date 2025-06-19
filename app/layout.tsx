// app/layout.tsx
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";

export const metadata = {
  title: "Nizams Indian Restaurant",
  description: "Taste The Royal Flavors",
};

import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-cream-50">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
