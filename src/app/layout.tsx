import type { Metadata } from "next";
import { Inter, Noto_Serif_KR, Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSerif = Noto_Serif_KR({ 
  weight: ["400", "700", "900"],
  subsets: ["latin"], 
  variable: "--font-noto-serif" 
});

export const metadata: Metadata = {
  title: "PresiTrack | 역대 대통령 정책 아카이브",
  description: "객관적 데이터와 역사적 팩트에 기반한 역대 대통령 정책 비교 및 평가 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <body className={`${inter.variable} ${notoSerif.variable} font-sans bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 antialiased`} style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
