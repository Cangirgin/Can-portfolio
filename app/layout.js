import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Can Portfolio",
  description: "Can'ın kişisel web sitesi ve frontend portfolyosu.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        style={{
          minHeight: "100vh",
          margin: 0,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <Header />
        <main className="pt-5">{children}</main>
      </body>
    </html>
  );
}
