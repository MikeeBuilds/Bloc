import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider"
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { Github } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BlocUI - Beautiful UI Components - Next.js & Tailwind CSS',
  description: 'Explore our collection of beautiful, premade UI components built with Next.js and Tailwind CSS.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background text-foreground">
            <div className="p-4 flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold">UI Components</Link>
              <div className="flex items-center space-x-4">
                <ModeToggle />
                <a href="https://github.com/MikeeBuilds/Bloc" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon">
                    <Github className="h-[1.2rem] w-[1.2rem]" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </a>
              </div>
            </header>
            <main className="container mx-auto py-8">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}