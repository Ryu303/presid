import type { Metadata } from "next";
import { Noto_Serif_KR } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";

const notoSerif = Noto_Serif_KR({ 
  weight: ["400", "700", "900"],
  subsets: ["latin"], 
  variable: "--font-noto-serif" 
});

export const metadata: Metadata = {
  title: "PPTI | 내가 만약 청와대에 들어간다면?",
  description: "객관적 데이터와 역사적 팩트에 기반한 정치 성향 테스트 및 정책 비교 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning className="font-sans">
      <body className={`${notoSerif.variable} font-sans bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 antialiased`} style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-[calc(100vh-80px)]">
            {children}
          </main>
          <footer className="w-full py-8 mt-auto text-center border-t border-[#E4E4E7] dark:border-[#27272A] bg-[#FAFAFA] dark:bg-[#111111]">
            <p className="text-[10px] md:text-xs font-medium text-[#71717A] dark:text-[#A1A1AA] tracking-[0.2em] uppercase">
              PRESITRACK | DATA-DRIVEN ARCHIVE
            </p>
            <p className="text-[10px] text-[#A1A1AA] dark:text-[#71717A] mt-2">
              © 2026 PresiTrack. All rights reserved.
            </p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
