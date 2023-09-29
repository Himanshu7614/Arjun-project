import "./globals.css";
import Navbar from "./component/Navbar/page";
import Footer from "./component/Footer/page";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Elevate click",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
