import "~/styles/globals.css";

import { type Metadata } from "next";
import { Albert_Sans } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import { Header } from "~/app/_components/Header";

export const metadata: Metadata = {
  title: "Enrique García - Design",
  description: "Portfolio of Enrique García",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const albert = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albert-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${albert.variable}`} style={{ fontFamily: 'var(--font-albert-sans)' }}>
      <body className="bg-white p-16 text-black">
        <TRPCReactProvider>
          <Header />
          <main>{children}</main>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
