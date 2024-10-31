import "./globals.css"
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Kushal Soni",
  description: "Blogs about AI and internationl relations",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet"/> 
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className=" flex flex-col min-h-svh ">
        <Header />
        <main className="flex-grow mx-auto max-w-4xl my-6">
          {children}
        </main>
        {/* <Footer/> */}
      </body>
    </html>
  );
}
