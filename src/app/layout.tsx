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
  title: "PPTI | 정치 성향 및 정책 아카이브",
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
          <footer className="w-full py-8 mt-auto text-center border-t border-slate-200 dark:border-slate-800 bg-[#FDFCF8] dark:bg-slate-950">
            <p className="text-[10px] md:text-xs font-medium text-slate-400 dark:text-slate-500 tracking-[0.2em] uppercase">
              Designed & Engineered by <span className="text-slate-700 dark:text-slate-300 font-bold">Ryu</span>
            </p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
