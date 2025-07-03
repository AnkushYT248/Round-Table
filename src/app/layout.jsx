import { Lato, Audiowide } from "next/font/google";
import "./globals.css";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeBody from "@/components/ThemeBody"
import Footer from "@/components/layout/footer/Footer";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const audiowide = Audiowide({
  variable: "--font-audiowide",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Round Table | World Grows As Its Learns",
  description: "Round Table is a platform for learning and growing together.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeContextProvider>
        <ThemeBody
          className={`${lato.className} ${audiowide.variable} antialiased h-screen w-screen overflow-x-hidden`}
        >
          {children}
          <Footer />
        </ThemeBody>
      </ThemeContextProvider>
    </html>
  );
}
