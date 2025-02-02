import localFont from "next/font/local";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import "./global.css";
import Header from "@/components/Header";
import CanvasWrapper from "@/components/CanvasWrapper";

const alpino = localFont({
  src: "../../public/fonts/Alpino-Variable.woff2",
  display: "swap",
  weight: "100 900",
  variable: "--font-alpino",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={alpino.variable}>
      <body className="overflow-x-hidden bg-yellow-300">
        <Header />
        {/*<main>{children}</main>*/}
        <main>{children}<CanvasWrapper/></main>
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
