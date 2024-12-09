import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Late Coin",
  description: "The Late Coin Memecoin is a movement with a sense of humor that welcomes everyone, anytime. It’s an icon of the belief that it’s always the right time.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Nabla&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" rel="styles" />
      <link href="https://fonts.googleapis.com/css2?family=Waiting+for+the+Sunrise&display=swap" />
      <link href="https://fonts.googleapis.com/css2?family=Matemasie&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Bungee+Inline&display=swap" rel="stylesheet"/>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
