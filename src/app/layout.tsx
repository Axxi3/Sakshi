import type { Metadata } from "next";
import { Figtree, Philosopher } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./component/Footer";
import FAQSection from "./component/Home/FAQ";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const philosopher = Philosopher({
  variable: "--font-philosopher",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "AyurVeda Wellness Center",
  description: "Experience Holistic Healing and Serenity with Ayurveda",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${figtree.variable} font-figtree ${philosopher.variable} antialiased`}
      >
        <Navbar />
        {children}
        <FAQSection/>
        <Footer/>
      </body>
    </html>
  );
}
