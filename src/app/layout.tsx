import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Twinker",
  description: "Get snapshots of your tweets instantly",
  // metadataBase: new URL("https://geminix-pro.vercel.app/"),
  openGraph: {
    type: "website",
    // url: "https://geminix-pro.vercel.app/",
    title: "Twinker",
    description: "Get snapshots of your tweets instantly",
    images: [
      {
        url: "https://i.imgur.com/oIv7lS5l.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="relative h-full w-full bg-slate-950 ">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-0" />
          {children}
        </main>
      </body>
    </html>
  );
}
