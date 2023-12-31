import "./globals.css";
import localFont from "next/font/local";
import { Oswald } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

const bowlby = localFont({
  src: "./BowlbyOne-Regular.ttf",
  variable: "--font-bowlby-one",
});

export const metadata = {
  title: "Jo's",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${oswald.variable} ${bowlby.variable} font-serif bg-background`}>
        {children}
      </body>
    </html>
  );
}
