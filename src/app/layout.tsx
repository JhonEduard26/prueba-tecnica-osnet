import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Osnet",
  description: "Tu tienda de tecnología",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="/flowbite.min.js"></script>
      </body>
    </html>
  );
}
