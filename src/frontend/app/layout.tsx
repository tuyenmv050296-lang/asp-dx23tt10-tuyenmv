import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RealtyFlow CRM",
  description: "Frontend CRM cho moi gioi va giao dich bat dong san"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
