import "./globals.css";
import { Montserrat } from "@next/font/google";
import Nav from "./Nav";
import Footer from "./Footer";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${montserrat.className} mx-0 my-6   md:mx-32`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
