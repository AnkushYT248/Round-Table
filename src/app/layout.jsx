import { Lato, Audiowide, Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeBody from "@/components/ThemeBody";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";

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

const monts = Montserrat({
  variable: '--font-monts',
  weight: ['100','200','300','400','500','600','700','800','900'],
  subsets: ['latin']
})

export const metadata = {
  title: "Round Table | World Grows As Its Learns",
  description: "Round Table is a platform for learning and growing together.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeContextProvider>
        <ThemeBody
          className={`${lato.className} ${audiowide.variable} ${monts.variable} antialiased h-screen w-screen overflow-x-hidden`}
        >
          <Header />
          {children}
          <Footer />
        </ThemeBody>
      </ThemeContextProvider>
    </html>
  );
}
