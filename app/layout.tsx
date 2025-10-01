import type { Metadata } from "next";
import { Be_Vietnam_Pro, Fira_Code } from "next/font/google";
import "./globals.css";

// Sans chính cho toàn site (hỗ trợ Vietnamese + Latin)
const beVietnam = Be_Vietnam_Pro({
  subsets: ["vietnamese", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-geist-sans", // giữ tên biến cũ để tương thích globals.css
  display: "swap",
});

// Font mono (tuỳ chọn)
const firaMono = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TGL TRANSPORT – Logistics Solutions",
  description:
    "Vận chuyển quốc tế chuyên nghiệp: Door-to-Door, thông quan, theo dõi vận đơn, 220+ quốc gia.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
       <head>
        {/* Google Site Verification */}
          <meta name="google-site-verification" content="VUJXABadpuxqTnt-SRXRonOjolf0F5rd6s6dNo1BW9A" />
      </head>
      <body className={`${beVietnam.variable} ${firaMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
